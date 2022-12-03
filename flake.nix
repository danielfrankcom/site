{
    description = "A serverless React-based personal site";

    inputs = {
        nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
        flake-utils.url = "github:numtide/flake-utils";
    };

    outputs = { self, nixpkgs, flake-utils }:
        flake-utils.lib.eachDefaultSystem 
            (system:
                let
                    pkgs = import nixpkgs { inherit system; };

                    nodePkgs = pkgs.nodePackages;
                in {
                    devShell = pkgs.mkShell {
                        buildInputs = [
                            pkgs.nodejs
                            nodePkgs.aws-cdk
                        ];
                    };
                }
            );
}

GEMBANK=$(solana-keygen pubkey ./target/deploy/gem_bank-keypair.json)
GEMFARM=$(solana-keygen pubkey ./target/deploy/gem_farm-keypair.json)
echo "Gem bank ID: $GEMBANK"
echo "Gem farm ID: $GEMFARM"

gem_bank = $GEMBANK
gem_farm = $GEMFARM
sed -r -e "s/(ONBOOT\s*=\s*).*/\1$onboot/" -e "s/(BOOTPROTO\s*=\s*).*/\1$bootproto/" file
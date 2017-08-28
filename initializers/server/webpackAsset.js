import { isArray } from 'lodash/lang';
import { find } from 'lodash/collection';

let assetPath;

const findAssetInManifest = (manifest, asset, extension) => (
  isArray(manifest[asset])
    ? find(manifest[asset], a => (a.endsWith(extension)))
    : manifest[asset]
);

if (__DEVELOPMENT__) {
  assetPath = (asset, extensions) => (
    `assets/${asset}.${extensions}`
  );
} else {
  const fs = require('fs');
  const path = require('path');

  const manifestPath = path.join(process.cwd(), 'webpack-manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  assetPath = (asset, extension) => (
    `assets/${findAssetInManifest(manifest, asset, extension)}`
  );
}

export default assetPath;
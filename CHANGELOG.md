# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@zapper-fi/studio?activeTab=versions

## [0.20.0](https://github.com/Zapper-fi/studio/compare/v0.19.1...v0.20.0) (2022-05-08)


### Features

* Integration for Gro Protocol ([#375](https://github.com/Zapper-fi/studio/issues/375)) ([fd72a1e](https://github.com/Zapper-fi/studio/commit/fd72a1e51a694cb19045943930a6b4ba50e9302b))


### Bug Fixes

* **balances:** Log an error and return the error message on failed balance fetcher invocation ([#393](https://github.com/Zapper-fi/studio/issues/393)) ([84430e2](https://github.com/Zapper-fi/studio/commit/84430e2eaee4e27da58add9c54eb45f60ba8e026))
* **gro:** Add logo and index ([#396](https://github.com/Zapper-fi/studio/issues/396)) ([833e81d](https://github.com/Zapper-fi/studio/commit/833e81d008b0e012408518a6e573b3bbd93a5777))
* **gro:** Add missing appDefinition wrapper to fix failing build ([#397](https://github.com/Zapper-fi/studio/issues/397)) ([f6e2bd2](https://github.com/Zapper-fi/studio/commit/f6e2bd22cac4364b664c37fc8b91b57da5cf4965))

### [0.19.1](https://github.com/Zapper-fi/studio/compare/v0.19.0...v0.19.1) (2022-05-06)


### Bug Fixes

* **logos:** Add missing logos ([#390](https://github.com/Zapper-fi/studio/issues/390)) ([bfc5499](https://github.com/Zapper-fi/studio/commit/bfc549945f062e6765fcc510309e228b6e14fdcf))

## [0.19.0](https://github.com/Zapper-fi/studio/compare/v0.18.2...v0.19.0) (2022-05-06)


### Features

* Migrate Klima to Studio ([#386](https://github.com/Zapper-fi/studio/issues/386)) ([ff20d6e](https://github.com/Zapper-fi/studio/commit/ff20d6ecd0631280187d57d59ef6331b04bce9f0))


### Bug Fixes

* update DFX url ([#383](https://github.com/Zapper-fi/studio/issues/383)) ([61a86f7](https://github.com/Zapper-fi/studio/commit/61a86f7ae1dacb7a5deec368321e5e7d5dc035eb))

### [0.18.2](https://github.com/Zapper-fi/studio/compare/v0.18.1...v0.18.2) (2022-05-06)


### Bug Fixes

* **convex:** Add synths as deps for factory pools ([#384](https://github.com/Zapper-fi/studio/issues/384)) ([d45ec7a](https://github.com/Zapper-fi/studio/commit/d45ec7ac836030d43da230001f1c04f296b6b8fb))

### [0.18.1](https://github.com/Zapper-fi/studio/compare/v0.18.0...v0.18.1) (2022-05-06)


### Bug Fixes

* Fix broken Balancer V2 pools for missing underlying tokens ([#379](https://github.com/Zapper-fi/studio/issues/379)) ([0d129a6](https://github.com/Zapper-fi/studio/commit/0d129a655966d6bd71b5c2b96a8fb044ce920efc))

## [0.18.0](https://github.com/Zapper-fi/studio/compare/v0.17.0...v0.18.0) (2022-05-06)


### Bug Fixes

* Add index file to Qi-Dao and Beethoven-X ([#377](https://github.com/Zapper-fi/studio/issues/377)) ([e5b25e8](https://github.com/Zapper-fi/studio/commit/e5b25e802014667f28ddcde53878330a6967d230))

## [0.17.0](https://github.com/Zapper-fi/studio/compare/v0.16.1...v0.17.0) (2022-05-06)


### Features

* Migrate Beethoven-x to Studio ([#374](https://github.com/Zapper-fi/studio/issues/374)) ([205cf84](https://github.com/Zapper-fi/studio/commit/205cf84b6c13ae41b35097f02f983a0814603b71))

### [0.16.1](https://github.com/Zapper-fi/studio/compare/v0.16.0...v0.16.1) (2022-05-05)


### Bug Fixes

* Capitalize DFX app name ([#370](https://github.com/Zapper-fi/studio/issues/370)) ([0735f26](https://github.com/Zapper-fi/studio/commit/0735f26570a0d7a0e91000420d5c64025e92bcd8))
* **maker:** Fix missing CDPs ([#372](https://github.com/Zapper-fi/studio/issues/372)) ([5f13110](https://github.com/Zapper-fi/studio/commit/5f1311004ab00876052fc2209d6ab0f702e7199c))

## [0.16.0](https://github.com/Zapper-fi/studio/compare/v0.15.0...v0.16.0) (2022-05-05)


### Features

* Migrate Qi Dao to Studio ([#310](https://github.com/Zapper-fi/studio/issues/310)) ([7a47678](https://github.com/Zapper-fi/studio/commit/7a47678137f553c3ac5af320dc690ec34e78322a))

## [0.15.0](https://github.com/Zapper-fi/studio/compare/v0.14.0...v0.15.0) (2022-05-05)


### Features

* **abracadabra:** Add support for new cauldrons and mSPELL ([#367](https://github.com/Zapper-fi/studio/issues/367)) ([0a144f4](https://github.com/Zapper-fi/studio/commit/0a144f4273672c867cce02d02564e342a2f8ef6b))


### Bug Fixes

* Add index files per app module ([#365](https://github.com/Zapper-fi/studio/issues/365)) ([c4ab4ed](https://github.com/Zapper-fi/studio/commit/c4ab4ed39c277b88e4945db583acecc7b2136869))

## [0.14.0](https://github.com/Zapper-fi/studio/compare/v0.13.1...v0.14.0) (2022-05-04)


### Features

* Extract Maker to Studio, change implementation to be fully on-chain and no reliance on third party APIs ([#357](https://github.com/Zapper-fi/studio/issues/357)) ([01f0052](https://github.com/Zapper-fi/studio/commit/01f00525a50bfa1e94b3cc9674b261e85e3a00e4))


### Bug Fixes

* add back deprecated tags until we finish removal in api ([#359](https://github.com/Zapper-fi/studio/issues/359)) ([eac377b](https://github.com/Zapper-fi/studio/commit/eac377b76560dc6fab73aa76bac90ada265adaed))
* Fix another Maker path ([#361](https://github.com/Zapper-fi/studio/issues/361)) ([89cb0b0](https://github.com/Zapper-fi/studio/commit/89cb0b01f3c1eaa2d4e777839f423c07f71d07e3))
* Fix paths in Maker ([#360](https://github.com/Zapper-fi/studio/issues/360)) ([8c382c5](https://github.com/Zapper-fi/studio/commit/8c382c528ab9ca33342c9cd3bebd960deeba8e61))
* remove legacy tags after all ([#362](https://github.com/Zapper-fi/studio/issues/362)) ([214595c](https://github.com/Zapper-fi/studio/commit/214595ceffeb55865a65d854045019b979d4edf2))

### [0.13.1](https://github.com/Zapper-fi/studio/compare/v0.13.0...v0.13.1) (2022-05-04)


### Bug Fixes

* **package:** Change how the package is exported ([#355](https://github.com/Zapper-fi/studio/issues/355)) ([5aced75](https://github.com/Zapper-fi/studio/commit/5aced75444f11a61116d7f47699e2c179763ad02))

## [0.13.0](https://github.com/Zapper-fi/studio/compare/v0.12.0...v0.13.0) (2022-05-04)


### Features

* DFX integration ([#347](https://github.com/Zapper-fi/studio/issues/347)) ([029e3b2](https://github.com/Zapper-fi/studio/commit/029e3b2f34cbafd3f930d5318ae7903529fd057f))
* **tags:** Update the app tags, make mandatory ([#349](https://github.com/Zapper-fi/studio/issues/349)) ([f38832f](https://github.com/Zapper-fi/studio/commit/f38832f819008fb5fd47162e94328c9085773a5c))


### Bug Fixes

* **cli:** Smol CLI improvements ([#352](https://github.com/Zapper-fi/studio/issues/352)) ([5351a5d](https://github.com/Zapper-fi/studio/commit/5351a5d219fcbe0bc848de68a086917769e4b554))
* Fix app definition helper in DFX, use correct imports for AppTag and AppAction ([#353](https://github.com/Zapper-fi/studio/issues/353)) ([06d5e45](https://github.com/Zapper-fi/studio/commit/06d5e454f76caf8e51e39756cfec813d5cdbac5d))
* Infer app definition group keys for stricter types ([#351](https://github.com/Zapper-fi/studio/issues/351)) ([083c2a3](https://github.com/Zapper-fi/studio/commit/083c2a3922dc60ecb6d6aa400f2469f070bbc8af))

## [0.12.0](https://github.com/Zapper-fi/studio/compare/v0.11.8...v0.12.0) (2022-05-02)


### Features

* migrate alpha-v1 to studio ([#235](https://github.com/Zapper-fi/studio/issues/235)) ([b9ab776](https://github.com/Zapper-fi/studio/commit/b9ab77666d7cee6c083f18ea39ba08005f537960))

### [0.11.8](https://github.com/Zapper-fi/studio/compare/v0.11.7...v0.11.8) (2022-05-02)


### Bug Fixes

* add missing mirror pools to uniswap pool token fetcher ([#343](https://github.com/Zapper-fi/studio/issues/343)) ([b56fad3](https://github.com/Zapper-fi/studio/commit/b56fad342a92110cb8a679501c9d5c292ec58da3))

### [0.11.7](https://github.com/Zapper-fi/studio/compare/v0.11.6...v0.11.7) (2022-05-01)


### Bug Fixes

* Fix Olympus gOHM price ([#341](https://github.com/Zapper-fi/studio/issues/341)) ([2842321](https://github.com/Zapper-fi/studio/commit/2842321547a88b939171143a37b8cd3a8d4a23c3))

### [0.11.6](https://github.com/Zapper-fi/studio/compare/v0.11.5...v0.11.6) (2022-04-29)


### Bug Fixes

* **balancer:** Export contract factory ([#339](https://github.com/Zapper-fi/studio/issues/339)) ([b6bf6d5](https://github.com/Zapper-fi/studio/commit/b6bf6d57cf8cd51c238c211b29510b51b482a245))

### [0.11.5](https://github.com/Zapper-fi/studio/compare/v0.11.4...v0.11.5) (2022-04-29)


### Bug Fixes

* **balancer:** Helpers should not accept multicall, resolve internally ([#336](https://github.com/Zapper-fi/studio/issues/336)) ([a30c5ef](https://github.com/Zapper-fi/studio/commit/a30c5efdfdbe7fee87d041803462d751f316a1e1))

### [0.11.4](https://github.com/Zapper-fi/studio/compare/v0.11.3...v0.11.4) (2022-04-29)


### Bug Fixes

* **balancer:** Also export the app module ([#333](https://github.com/Zapper-fi/studio/issues/333)) ([8107ea8](https://github.com/Zapper-fi/studio/commit/8107ea8448feafa54c1a0b597e1658ac97335a28))

### [0.11.3](https://github.com/Zapper-fi/studio/compare/v0.11.2...v0.11.3) (2022-04-29)


### Bug Fixes

* **balancer:** Forgot to add export in module - it's Friday ([#331](https://github.com/Zapper-fi/studio/issues/331)) ([d11e4e0](https://github.com/Zapper-fi/studio/commit/d11e4e03f43f14ae1093c140e3e5e038d616748e))

### [0.11.2](https://github.com/Zapper-fi/studio/compare/v0.11.1...v0.11.2) (2022-04-29)


### Bug Fixes

* **balancer:** Add missing exports for zapper api ([#329](https://github.com/Zapper-fi/studio/issues/329)) ([be0e820](https://github.com/Zapper-fi/studio/commit/be0e820b46bc43bfe521275ca78d05f25bc87002))

### [0.11.1](https://github.com/Zapper-fi/studio/compare/v0.11.0...v0.11.1) (2022-04-29)


### Bug Fixes

* **balancer:** Add index files for Zapper API ([#327](https://github.com/Zapper-fi/studio/issues/327)) ([6fcec84](https://github.com/Zapper-fi/studio/commit/6fcec8450d8301bd983e333cac215436a9ce90ed))

## [0.11.0](https://github.com/Zapper-fi/studio/compare/v0.10.0...v0.11.0) (2022-04-29)


### Features

* Balancer v2 to studio ([#318](https://github.com/Zapper-fi/studio/issues/318)) ([d582317](https://github.com/Zapper-fi/studio/commit/d5823172e522bcea3a379ef25366995f41960382))
* **caching:** Add `clear-cache` command ([9fe7dfe](https://github.com/Zapper-fi/studio/commit/9fe7dfe3cf6f5a582f5f1a132c9bd7401701c535))
* **caching:** Add file system cache ([#316](https://github.com/Zapper-fi/studio/issues/316)) ([4168929](https://github.com/Zapper-fi/studio/commit/41689293a509503a0ec9a811e08872a47ab73f6d))
* **cli:** Add the ability to set custom network providers ([#325](https://github.com/Zapper-fi/studio/issues/325)) ([f4f0d08](https://github.com/Zapper-fi/studio/commit/f4f0d0890ff88bd61666f1e4ce36bbe4a02ec616))
* migrate balancer-v1 to studio ([#236](https://github.com/Zapper-fi/studio/issues/236)) ([ef15509](https://github.com/Zapper-fi/studio/commit/ef15509c98898559fa17a5bfb9c96367f2563906))
* **PoolTogether:** Add TVL. Refactor naming. Add PoolTogether contract registry. Fix APR.  ([#304](https://github.com/Zapper-fi/studio/issues/304)) ([5273348](https://github.com/Zapper-fi/studio/commit/527334882e3b9ea9ac2b988d772f5cab81c601e8))


### Bug Fixes

* **caching:** No need to load the cache on start ([#321](https://github.com/Zapper-fi/studio/issues/321)) ([3055589](https://github.com/Zapper-fi/studio/commit/3055589182c458a98e46e64a34a9d40767578036))
* **tokemak:** Remove claimable balance of "Staked TOKE" label ([#320](https://github.com/Zapper-fi/studio/issues/320)) ([ccc4d73](https://github.com/Zapper-fi/studio/commit/ccc4d7347d76cddf5a4b313abf67c87850b6a500))

## [0.10.0](https://github.com/Zapper-fi/studio/compare/v0.9.1...v0.10.0) (2022-04-29)


### Features

* Dynamically infer app dependencies at boot, dynamically use externallyConfigured ([#302](https://github.com/Zapper-fi/studio/issues/302)) ([9e9e203](https://github.com/Zapper-fi/studio/commit/9e9e203a9bf50ea92d4d35b6b981b3a6e0cbd3cf))

### [0.9.1](https://github.com/Zapper-fi/studio/compare/v0.9.0...v0.9.1) (2022-04-29)


### Bug Fixes

* AirSwap sAST V3 balances ([#313](https://github.com/Zapper-fi/studio/issues/313)) ([e5ef04b](https://github.com/Zapper-fi/studio/commit/e5ef04b210ffe8bba4bd2c9ed5915b14650a2bc6))

## [0.9.0](https://github.com/Zapper-fi/studio/compare/v0.8.1...v0.9.0) (2022-04-29)


### Features

* Airswap integration for sAst v3 ([#303](https://github.com/Zapper-fi/studio/issues/303)) ([a5f7c26](https://github.com/Zapper-fi/studio/commit/a5f7c265393890a52e6f5385540475bc9868e4f2))
* **pancakeswap:** Port pancakeswap into Studio ([#305](https://github.com/Zapper-fi/studio/issues/305)) ([6d0019b](https://github.com/Zapper-fi/studio/commit/6d0019b9d3a7ed7850d29b4371b1526c8c3df3c7))


### Bug Fixes

* Fix undefined positions when cache is not primed ([#312](https://github.com/Zapper-fi/studio/issues/312)) ([7f82b34](https://github.com/Zapper-fi/studio/commit/7f82b34e807591e8cc4ae6f5b1c076f097c8bf89))
* Small fixes to Airswap ([#311](https://github.com/Zapper-fi/studio/issues/311)) ([8003105](https://github.com/Zapper-fi/studio/commit/800310566cdf0fd21934f852a208cdb2ea9b73e7))

### [0.8.1](https://github.com/Zapper-fi/studio/compare/v0.8.0...v0.8.1) (2022-04-27)


### Bug Fixes

* Rename wBAN to Banano ([#299](https://github.com/Zapper-fi/studio/issues/299)) ([6b1e265](https://github.com/Zapper-fi/studio/commit/6b1e265dba2fcb83968c22f25755815af556459d))

## [0.8.0](https://github.com/Zapper-fi/studio/compare/v0.7.3...v0.8.0) (2022-04-27)


### Features

* Uniswap V2 TVL helper ([#295](https://github.com/Zapper-fi/studio/issues/295)) ([d47847a](https://github.com/Zapper-fi/studio/commit/d47847a13de31d9608e7bb899d2fc8d708bf04b0))


### Bug Fixes

* **illuvium:** Fix missing await in v1 staked balances ([#298](https://github.com/Zapper-fi/studio/issues/298)) ([45b40cc](https://github.com/Zapper-fi/studio/commit/45b40cc16f47291a0ee67daed77ee9abe311e735))

### [0.7.3](https://github.com/Zapper-fi/studio/compare/v0.7.2...v0.7.3) (2022-04-27)


### Bug Fixes

* **trader-joe:** Fix xJOE price ([#293](https://github.com/Zapper-fi/studio/issues/293)) ([00a6f90](https://github.com/Zapper-fi/studio/commit/00a6f90bee46ab5054c274b9f2c370d464aba064))

### [0.7.2](https://github.com/Zapper-fi/studio/compare/v0.7.1...v0.7.2) (2022-04-27)


### Bug Fixes

* Update AppDefinition class with links ([#291](https://github.com/Zapper-fi/studio/issues/291)) ([0fd76cf](https://github.com/Zapper-fi/studio/commit/0fd76cf02250f9f13e62b7afa7b77d0d63ddeddc))

### [0.7.1](https://github.com/Zapper-fi/studio/compare/v0.7.0...v0.7.1) (2022-04-27)


### Bug Fixes

* **apps:** Add social links to all apps ([#280](https://github.com/Zapper-fi/studio/issues/280)) ([0bb0453](https://github.com/Zapper-fi/studio/commit/0bb0453b6b4d9b248c52f6e6a5449eb02d58fc17))

## [0.7.0](https://github.com/Zapper-fi/studio/compare/v0.6.1...v0.7.0) (2022-04-27)


### Features

* port over KeeperDao ([#284](https://github.com/Zapper-fi/studio/issues/284)) ([a0936ab](https://github.com/Zapper-fi/studio/commit/a0936abeb5dfa8e591af703b5852162c951a735c))

### [0.6.1](https://github.com/Zapper-fi/studio/compare/v0.6.0...v0.6.1) (2022-04-27)


### Bug Fixes

* **logos:** Add missing logos ([#286](https://github.com/Zapper-fi/studio/issues/286)) ([675925e](https://github.com/Zapper-fi/studio/commit/675925e526ee47883c9764d130bf0cd905a4a324))

## [0.6.0](https://github.com/Zapper-fi/studio/compare/v0.5.1...v0.6.0) (2022-04-27)


### Features

* Add lido integration ([#250](https://github.com/Zapper-fi/studio/issues/250)) ([66219c4](https://github.com/Zapper-fi/studio/commit/66219c4be5df4230da364bc0f1b74bb2bb0aaf53))
* add trader-joe app ([#265](https://github.com/Zapper-fi/studio/issues/265)) ([0082a26](https://github.com/Zapper-fi/studio/commit/0082a268d26ac8d741f573d399eeadccca1b0ef8))
* port over pool-together ([#254](https://github.com/Zapper-fi/studio/issues/254)) ([6ba4e19](https://github.com/Zapper-fi/studio/commit/6ba4e195cb29975de98a43559db226cc3cc6fda6))


### Bug Fixes

* Lido merge conflicts and linting ([#285](https://github.com/Zapper-fi/studio/issues/285)) ([98b22a0](https://github.com/Zapper-fi/studio/commit/98b22a06093b767e540745ac051cf48298da40a4))

### [0.5.1](https://github.com/Zapper-fi/studio/compare/v0.5.0...v0.5.1) (2022-04-26)


### Bug Fixes

* import things in a specific way to prevent transpiler issue ([#281](https://github.com/Zapper-fi/studio/issues/281)) ([21d5a79](https://github.com/Zapper-fi/studio/commit/21d5a794c7685ac7c910ec48a34c93214641d12a))
* **pickle:** Use app toolkit for all helpers ([4dfa5c2](https://github.com/Zapper-fi/studio/commit/4dfa5c2c75b2addaad239e31f732931627135323))

## [0.5.0](https://github.com/Zapper-fi/studio/compare/v0.4.1...v0.5.0) (2022-04-26)


### Features

* **illuvium:** Extract Illuvium to Studio and fix the staked/claimable amounts ([#273](https://github.com/Zapper-fi/studio/issues/273)) ([3da8a03](https://github.com/Zapper-fi/studio/commit/3da8a033bdd53bbfc6b43362e716fd353bc56952))


### Bug Fixes

* Resolve conflict in rename of AbstractApp ([#279](https://github.com/Zapper-fi/studio/issues/279)) ([989b3f5](https://github.com/Zapper-fi/studio/commit/989b3f5887d220b63e01a1d35faaac0246c923e1))

### [0.4.1](https://github.com/Zapper-fi/studio/compare/v0.4.0...v0.4.1) (2022-04-26)


### Bug Fixes

* **yearn:** Add app index file ([#275](https://github.com/Zapper-fi/studio/issues/275)) ([ba1f7ec](https://github.com/Zapper-fi/studio/commit/ba1f7ecfdd0b583a4cf2239d000646bd840d3e08))

## [0.4.0](https://github.com/Zapper-fi/studio/compare/v0.3.2...v0.4.0) (2022-04-26)


### Features

* **abracadabra:** Migrate Abracadabra to Studio ([#264](https://github.com/Zapper-fi/studio/issues/264)) ([5a4c596](https://github.com/Zapper-fi/studio/commit/5a4c596c8a4bc35ba315aed9b7266c99be91a567))
* Airswap integration ([#245](https://github.com/Zapper-fi/studio/issues/245)) ([d34cbaa](https://github.com/Zapper-fi/studio/commit/d34cbaa5b0dd6d25f1479b6b09ed6004793dd036))
* **airswap:** Fix linting in Airswap ([#266](https://github.com/Zapper-fi/studio/issues/266)) ([543f388](https://github.com/Zapper-fi/studio/commit/543f3886fe8c4fe6e818a9ca7d5882ab9b4111ca))
* **dev-experience:** Ease app module creation and external app imports ([#268](https://github.com/Zapper-fi/studio/issues/268)) ([bf6d8b4](https://github.com/Zapper-fi/studio/commit/bf6d8b4961aa5e384501988c4ec1dac96bba2f91))
* Implemented Jpeg'd's pools and bonds ([#272](https://github.com/Zapper-fi/studio/issues/272)) ([afc2dd8](https://github.com/Zapper-fi/studio/commit/afc2dd8dc166f37169b8e0e024f5bf60b7e5489c))
* Migrate Pickle over ([#238](https://github.com/Zapper-fi/studio/issues/238)) ([84b5c4e](https://github.com/Zapper-fi/studio/commit/84b5c4e939725afd01fa463c288da18f1e568643))
* **yearn:** Migrate Yearn over ([#256](https://github.com/Zapper-fi/studio/issues/256)) ([2c773e7](https://github.com/Zapper-fi/studio/commit/2c773e72bb09aa70f6fac5d36bd75e7ad7aff56e))


### Bug Fixes

* **cache:** Cache improvements ([#260](https://github.com/Zapper-fi/studio/issues/260)) ([a90887c](https://github.com/Zapper-fi/studio/commit/a90887c66bc1d51cc950a5f3b8717794bb25e39d))

### [0.3.2](https://github.com/Zapper-fi/studio/compare/v0.3.1...v0.3.2) (2022-04-25)

### Bug Fixes

- **olympus:** Add V1 bond depository contract ([#258](https://github.com/Zapper-fi/studio/issues/258)) ([44ba840](https://github.com/Zapper-fi/studio/commit/44ba840bbcc043248761d73f0ef78e25ed19e7ac))

### [0.3.1](https://github.com/Zapper-fi/studio/compare/v0.3.0...v0.3.1) (2022-04-25)

### Bug Fixes

- Create index files for Uniswap V2 and Olympus modules ([#255](https://github.com/Zapper-fi/studio/issues/255)) ([dfb00ce](https://github.com/Zapper-fi/studio/commit/dfb00cea82c3c5bf63e6e9e2c779d24243bae8db))
- init cache earlier to prevent infinite loop ([#252](https://github.com/Zapper-fi/studio/issues/252)) ([a2f1152](https://github.com/Zapper-fi/studio/commit/a2f115207e3e70a8275275943e2a1b6e4be753a2))

## [0.3.0](https://github.com/Zapper-fi/studio/compare/v0.2.5...v0.3.0) (2022-04-25)

### Features

- Add Olympus V2 bonds ([#203](https://github.com/Zapper-fi/studio/issues/203)) ([cbde9d4](https://github.com/Zapper-fi/studio/commit/cbde9d49f51ff7b3acabd7552be1e1b653540227))
- add tokemak tvl fetcher ([#215](https://github.com/Zapper-fi/studio/issues/215)) ([3f4da77](https://github.com/Zapper-fi/studio/commit/3f4da77e44155c8e7af432329a2cf7097f099c00))
- Extract Naos to Studio for MasterChef example ([#247](https://github.com/Zapper-fi/studio/issues/247)) ([0650871](https://github.com/Zapper-fi/studio/commit/065087160fa41ae5b44a35da8a9b1539606eeeb4))
- Extract Olympus to Studio ([#228](https://github.com/Zapper-fi/studio/issues/228)) ([2b9b887](https://github.com/Zapper-fi/studio/commit/2b9b887a872a4572058847cba42f9aa06074719c))
- Extract uniswap-v2 to Studio ([#218](https://github.com/Zapper-fi/studio/issues/218)) ([8c2bbec](https://github.com/Zapper-fi/studio/commit/8c2bbec5decfff0f9ac20fabf73b0992dbeb5186))
- Migrate Curve over ([#229](https://github.com/Zapper-fi/studio/issues/229)) ([1043bc8](https://github.com/Zapper-fi/studio/commit/1043bc8780bf999d53e7b7aab2a55c2e0d08ff39))
- wBAN integration ([#246](https://github.com/Zapper-fi/studio/issues/246)) ([81837ef](https://github.com/Zapper-fi/studio/commit/81837ef18f1296c7648cd69f7827850f5d4f45a1))

### Bug Fixes

- Catch @Cache & @CacheOnInterval errors ([#234](https://github.com/Zapper-fi/studio/issues/234)) ([ec71d80](https://github.com/Zapper-fi/studio/commit/ec71d80d5f09310c0af3dacf7cc87ba893124a8c))
- **curve:** Replace helper references for app toolkit ([#240](https://github.com/Zapper-fi/studio/issues/240)) ([c7a6064](https://github.com/Zapper-fi/studio/commit/c7a60642fd10802ebb2cf861cf475a25002e24cb))
- Fix linting and logo in wBAN ([#249](https://github.com/Zapper-fi/studio/issues/249)) ([b3a170f](https://github.com/Zapper-fi/studio/commit/b3a170f52a440356865464093a11625ac8b52269))
- Fix Olympus module not loading ([#230](https://github.com/Zapper-fi/studio/issues/230)) ([ba2d565](https://github.com/Zapper-fi/studio/commit/ba2d56575d3a0fad5ff25f14966f087306dca824))
- Fix rewards to be per second and not per block ([#251](https://github.com/Zapper-fi/studio/issues/251)) ([d6f9553](https://github.com/Zapper-fi/studio/commit/d6f9553e89c2a2089e382a665ad5b6e7282c5e57))
- Rename resolveTotalRewardPerBlock to resolveTotalRewardRate ([#248](https://github.com/Zapper-fi/studio/issues/248)) ([371841a](https://github.com/Zapper-fi/studio/commit/371841abfe7dd4db02de418995397b090e8ce94d))
- Resolve circular dependencies in Olympus ([#232](https://github.com/Zapper-fi/studio/issues/232)) ([ee54d2a](https://github.com/Zapper-fi/studio/commit/ee54d2a4d95e1281ab7742734629d5a5b8d6c47f))
- Split Olympus bond balance helper for v1 and v2 bonds, keep bond position fetcher generic, fix lint error ([#242](https://github.com/Zapper-fi/studio/issues/242)) ([0ea4021](https://github.com/Zapper-fi/studio/commit/0ea4021b5c0221ae3f68321ff66c3df0bd26ebfd))
- Temporarily disable Olympus ([#231](https://github.com/Zapper-fi/studio/issues/231)) ([2ec6cfb](https://github.com/Zapper-fi/studio/commit/2ec6cfba7c71e50a90d894a5fbde563aadd3e99c))
- Tokemak - add missing reactors & fix claimable rewards ([#237](https://github.com/Zapper-fi/studio/issues/237)) ([1792cdd](https://github.com/Zapper-fi/studio/commit/1792cddb2eabcdbffba89409fe682806bc715e60))
- **tokemak:** Use App Toolkit instead of position service ([#239](https://github.com/Zapper-fi/studio/issues/239)) ([2d4e54a](https://github.com/Zapper-fi/studio/commit/2d4e54a639cb4ea4ff9a02be8e705f38850d6ae1))

### [0.2.5](https://github.com/Zapper-fi/studio/compare/0.2.4...v0.2.5) (2022-04-22)

### Bug Fixes

- Use release-please in favor of semantic-release ([#221](https://github.com/Zapper-fi/studio/issues/221)) ([aa25404](https://github.com/Zapper-fi/studio/commit/aa25404564f7438fef5d88ef45e1834d5fd50aa0))

### [0.2.4](https://github.com/Zapper-fi/studio/compare/0.2.3...0.2.4) (2022-04-22)

### Bug Fixes

- Use single quotes for release body on publish in case commit message has double quotes ([#216](https://github.com/Zapper-fi/studio/issues/216)) ([20927f3](https://github.com/Zapper-fi/studio/commit/20927f37ad292b48148f5f9a01e4c6a5c1461130))

### [0.2.3](https://github.com/Zapper-fi/studio/compare/0.2.2...0.2.3) (2022-04-22)

### Bug Fixes

- Add Tokemak, Liquity, and Teddy Cash indexes ([#213](https://github.com/Zapper-fi/studio/issues/213)) ([1f1ab78](https://github.com/Zapper-fi/studio/commit/1f1ab789c58957e5e21b77d0e404c2336da9a366))

### [0.2.2](https://github.com/Zapper-fi/studio/compare/0.2.1...0.2.2) (2022-04-22)

### Bug Fixes

- Removed CLI from tsconfig to fix dist structure in build ([#211](https://github.com/Zapper-fi/studio/issues/211)) ([858e51d](https://github.com/Zapper-fi/studio/commit/858e51d0188355fe26ddefdf406c4fd5fe7ded86))

### Reverts

- Revert "bug-fix: Removed CLI from tsconfig to fix dist structure in build (#209)" (#210) ([9cf6aec](https://github.com/Zapper-fi/studio/commit/9cf6aec1500d7d08832b177f851234d829e93808)), closes [#209](https://github.com/Zapper-fi/studio/issues/209) [#210](https://github.com/Zapper-fi/studio/issues/210)

### [0.2.1](https://github.com/Zapper-fi/studio/compare/0.2.0...0.2.1) (2022-04-22)

### Bug Fixes

- Move build step to publish step ([#207](https://github.com/Zapper-fi/studio/pull/207)) ([085694a](https://github.com/Zapper-fi/studio/commit/085694a1d457f902497e806ed411e056f34585cd))

## [0.2.0](https://github.com/Zapper-fi/studio/compare/0.1.1...0.2.0) (2022-04-22)

### Bug Fixes

- **cli:** string upperCase and kebabCase error ([#199](https://github.com/Zapper-fi/studio/issues/199)) ([c765c78](https://github.com/Zapper-fi/studio/commit/c765c78a7ef2e865929674d1e97eaf893ce1d7f4))
- Studio CLI failing on prettier ([#194](https://github.com/Zapper-fi/studio/issues/194)) ([a03425c](https://github.com/Zapper-fi/studio/commit/a03425c16901ca01ce6109c5bb070307030f017f))

### Features

- Extract Tokemak to Studio ([#204](https://github.com/Zapper-fi/studio/issues/204)) ([42a7f80](https://github.com/Zapper-fi/studio/commit/42a7f8074bafbabe3b1e519e8258fc86ff949844))

### [0.1.1](https://github.com/Zapper-fi/studio/compare/0.1.0...0.1.1) (2022-04-20)

### Bug Fixes

- Disable manual workflow for publishing ([#178](https://github.com/Zapper-fi/studio/issues/178)) ([db5733d](https://github.com/Zapper-fi/studio/commit/db5733daf4441c06a99f665dd138f62c5decb1ad))
- Fix the changelog not being forwarded to Zapper API ([#176](https://github.com/Zapper-fi/studio/issues/176)) ([8e2d7f8](https://github.com/Zapper-fi/studio/commit/8e2d7f82577253710d3a54505d6ac4c732dcb02e))
- Fix wrong job dependency for publish action ([#177](https://github.com/Zapper-fi/studio/issues/177)) ([08dd40c](https://github.com/Zapper-fi/studio/commit/08dd40c162cb5d59abd66d6c91ed903ab749dc59))
- Remove Semantic Release legacy GH action ([#180](https://github.com/Zapper-fi/studio/issues/180)) ([44cd4bf](https://github.com/Zapper-fi/studio/commit/44cd4bfc1c53db1add1b70781f956fe740954c08))

## [0.1.0](https://github.com/Zapper-fi/studio/compare/0.0.26...0.1.0) (2022-04-20)

### Bug Fixes

- Delete automatically generated tag from release ([#174](https://github.com/Zapper-fi/studio/issues/174)) ([2cf6e3b](https://github.com/Zapper-fi/studio/commit/2cf6e3bb9abd064fe8be012d274d3284b808f5ef))
- Do not commit using semantic-release ([#170](https://github.com/Zapper-fi/studio/issues/170)) ([a26d968](https://github.com/Zapper-fi/studio/commit/a26d9686f76ad86b4e76fa8c46dca725af5193aa))
- Github action for package.json uses main too now ([#169](https://github.com/Zapper-fi/studio/issues/169)) ([6513a31](https://github.com/Zapper-fi/studio/commit/6513a31459a775c14c9d427c0f343e838c51f922))
- Try opening a PR using main as base ([#168](https://github.com/Zapper-fi/studio/issues/168)) ([78e4303](https://github.com/Zapper-fi/studio/commit/78e4303ef430df6ea631a4be51fc42b15f017f58))
- Try opening a PR with semantic commits ([#167](https://github.com/Zapper-fi/studio/issues/167)) ([60e1584](https://github.com/Zapper-fi/studio/commit/60e1584fc2550c443b86c06369b882031b26d236))
- Try out a fix commit to test semantic-release ([#165](https://github.com/Zapper-fi/studio/issues/165)) ([d48a930](https://github.com/Zapper-fi/studio/commit/d48a930bece4e6d830f7564dbeeb51d789df5300))
- Try semantic-release non-dry run ([#166](https://github.com/Zapper-fi/studio/issues/166)) ([3677b5d](https://github.com/Zapper-fi/studio/commit/3677b5d803bd6a153cb850a55da1cb268fad2a55))

### Features

- Test semantic release ([#164](https://github.com/Zapper-fi/studio/issues/164)) ([46644bb](https://github.com/Zapper-fi/studio/commit/46644bb5d13d8eda3ee28c53a0c979ac0a7a2f91))

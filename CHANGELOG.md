# Changelog

All notable changes to this project will be documented in this file.

## [1.3.0](https://github.com/prinsss/twitter-web-exporter/compare/v1.2.1..v1.3.0) - 2025-06-11

### ⛰️  Features

- Export author's user ID of tweet - ([b9bdf90](https://github.com/prinsss/twitter-web-exporter/commit/b9bdf902dbab7555b07aab9ee4e5c5cfc727ab47))
- Export media tags of tweet - ([0308628](https://github.com/prinsss/twitter-web-exporter/commit/0308628206fabc5c299566073789de899b82f9d0))
- Upgrade dependencies - ([537aaad](https://github.com/prinsss/twitter-web-exporter/commit/537aaadb7b962d9c6a06fb2932e5172b7274b401))
- Save filename pattern for exporting media to options - ([9daaf5c](https://github.com/prinsss/twitter-web-exporter/commit/9daaf5c0383784bc60f626ab2fb84f64b6704921))
- Add option for exporting URLs in aria2 format - ([f54f09d](https://github.com/prinsss/twitter-web-exporter/commit/f54f09dae31ace73221b689c34310a8fee2732ba))

### 🐛 Bug Fixes

- Adapt to Twitter API changes for users - ([9f0327a](https://github.com/prinsss/twitter-web-exporter/commit/9f0327ae9cc63b630683c43d7dcf622aec9d6e12))
- Allow undefined typename when extracting media #75 - ([c54a544](https://github.com/prinsss/twitter-web-exporter/commit/c54a5444aba76d518033765c7a10a5495ab40c5e))
- Use file-saver-es instead of file-saver - ([728b993](https://github.com/prinsss/twitter-web-exporter/commit/728b993d3c222e8d4b899a0468c09dbbd35665a9))

### Build

- Migrate from pnpm to bun - ([e6701e4](https://github.com/prinsss/twitter-web-exporter/commit/e6701e4b45e1a71ae8b297b0b9f8309acd856df5))

## [1.2.1](https://github.com/prinsss/twitter-web-exporter/compare/v1.2.0..v1.2.1) - 2025-04-03

### ⛰️  Features

- Extend TweetDetail to support hidden replies #66 - ([a13508f](https://github.com/prinsss/twitter-web-exporter/commit/a13508f97b790d53c95a6d729d44e646278474b5))
- Show following count in user table - ([cf61756](https://github.com/prinsss/twitter-web-exporter/commit/cf61756ee07b97c244414785a894e5392fdc9c29))
- Add DirectMessagesModule - ([80993d1](https://github.com/prinsss/twitter-web-exporter/commit/80993d195a5b486e336200f8a319d3ed3696c0df))
- Show storage quota when analyzing DB - ([8dbe72e](https://github.com/prinsss/twitter-web-exporter/commit/8dbe72ec15feca1e5bbe8fa7486a54a7efc9b613))
- Support filtering by type when exporting media - ([15c0790](https://github.com/prinsss/twitter-web-exporter/commit/15c079081a1c7622e9c956d6f524740c46a171a5))
- Add more columns to user table - ([bea3fe0](https://github.com/prinsss/twitter-web-exporter/commit/bea3fe06ebc38997a4d9113ff5a3bc894130a675))
- Add UserDetailModule - ([6089ca3](https://github.com/prinsss/twitter-web-exporter/commit/6089ca3614593e82e472a6b07049bfa7055c596c))

### 🐛 Bug Fixes

- Adapt to timeline_v2 API changes - ([4ff3040](https://github.com/prinsss/twitter-web-exporter/commit/4ff3040a1aebb5f23e5b150402aab65241b0d971))
- Update TweetDetail API - ([5a50bc6](https://github.com/prinsss/twitter-web-exporter/commit/5a50bc66c90c97b922061251f1021402e1392050))
- Capture group DM conversations - ([df153a4](https://github.com/prinsss/twitter-web-exporter/commit/df153a4d1ffa7616c00debb594d3bff5249ace76))
- Error when reading views count - ([4137b5f](https://github.com/prinsss/twitter-web-exporter/commit/4137b5f3ec486c3fff9b82c1d7ad706c1a065289))
- Import from proper package - ([a5b6e55](https://github.com/prinsss/twitter-web-exporter/commit/a5b6e55f9b816b89217c9c43e4aebc72a72ab509))
- Missing translation key for modal titles - ([172f3f3](https://github.com/prinsss/twitter-web-exporter/commit/172f3f3178862af2dd3fb6c2ed69d443e39230b1))
- Catch database errors - ([e984b68](https://github.com/prinsss/twitter-web-exporter/commit/e984b68ddd388f2de2be616400a4af9961cc93a5))

### 🚜 Refactor

- Extract table view as a common component - ([f8e1d18](https://github.com/prinsss/twitter-web-exporter/commit/f8e1d1809d7ada795b662e4576f3f1fa7922a6c1))

### 📚 Documentation

- Update README - ([c1cedd4](https://github.com/prinsss/twitter-web-exporter/commit/c1cedd422f1ccf3e17eaa4de24c2d77216828c70))
- Update README - ([9904480](https://github.com/prinsss/twitter-web-exporter/commit/9904480dbfd29f2ade82aee3e328a09b4da11fd0))

## [1.2.0](https://github.com/prinsss/twitter-web-exporter/compare/v1.1.0..v1.2.0) - 2024-10-22

### ⛰️  Features

- Update title text on UI - ([0e1409a](https://github.com/prinsss/twitter-web-exporter/commit/0e1409ac9fa0fe95f42e9ab8a9f2b3798efe6751))
- Support exporting and clearing database - ([4cb8035](https://github.com/prinsss/twitter-web-exporter/commit/4cb8035adf0d35be58422129f9ddc563263027bf))
- Upgrade dependencies - ([5413a9a](https://github.com/prinsss/twitter-web-exporter/commit/5413a9a73ef1775af8f54030bce92ce49f7530f7))
- Add menu command for opening control panel - ([37f32f7](https://github.com/prinsss/twitter-web-exporter/commit/37f32f7bc0b28f2450dfe35e7e6f63b36fc5a26f))
- Export ALT text for images - ([1e81fb3](https://github.com/prinsss/twitter-web-exporter/commit/1e81fb30703b102f3b0955d4475264c4556399ff))
- Add i18n for headers of exported HTML - ([59ca0fe](https://github.com/prinsss/twitter-web-exporter/commit/59ca0fe928ef2f6abb2eb96e4bc05985225ce6fc))
- Add local database - ([d357c4d](https://github.com/prinsss/twitter-web-exporter/commit/d357c4dc5ca981a6f7df5c9963ca45c263f74eb1))
- Pass ext instance to interceptor and component - ([07127f0](https://github.com/prinsss/twitter-web-exporter/commit/07127f0426161899567c804d82d0dd27359627dc))

### 🐛 Bug Fixes

- Import useSignal from proper package - ([11eae28](https://github.com/prinsss/twitter-web-exporter/commit/11eae2813fb6aee1b92976bfb00fb1f11bc16a42))
- Filter out empty tweets in db - ([2e35ba0](https://github.com/prinsss/twitter-web-exporter/commit/2e35ba02b0f4faaec65ab5255b49144a811a497b))
- Error when TimelineAddEntries is missing - ([9b3ccb8](https://github.com/prinsss/twitter-web-exporter/commit/9b3ccb85e76a1d7018c9388a50ddfa87b388dd9f))
- Update min height of modals - ([2d284b5](https://github.com/prinsss/twitter-web-exporter/commit/2d284b57e9d154945c7217a045eca9d1a9b3cc89))
- Select all rows by default - ([e4d6aa2](https://github.com/prinsss/twitter-web-exporter/commit/e4d6aa2f90e140db5ca34d7a32c4cac9cb5f6cc0))
- Skip and warn when exporting suspended user - ([1c7f970](https://github.com/prinsss/twitter-web-exporter/commit/1c7f9707a4c46951a1df3663108e4d0cd408d81f))
- Error when expaned_url does not exist - ([f45ee10](https://github.com/prinsss/twitter-web-exporter/commit/f45ee10803ca1915e9e827215c178c24bbda635f))

### 🚜 Refactor

- Adapt modules to new database - ([947c9f7](https://github.com/prinsss/twitter-web-exporter/commit/947c9f75b51a3c300cf6a18560e7275259f18305))
- Read data from database instead of signals - ([c420263](https://github.com/prinsss/twitter-web-exporter/commit/c4202630317234b12daa95a6f3e7a903d93254c9))
- Rearrange directory structure of core - ([3caafdf](https://github.com/prinsss/twitter-web-exporter/commit/3caafdf03faa43ef20e3684621ad6fd6f042a5e9))

### 📚 Documentation

- Update README - ([2a159b9](https://github.com/prinsss/twitter-web-exporter/commit/2a159b9228ec2a04bd1a8db5ba02d8e09eb9ec24))
- I18n for userscript name - ([7b2307f](https://github.com/prinsss/twitter-web-exporter/commit/7b2307fa5503469329c39f9e9852fc7097019ecf))

### ⚙️ Miscellaneous Tasks

- Rename eslint config file - ([77d05f3](https://github.com/prinsss/twitter-web-exporter/commit/77d05f3f3d609d67c1002c692899f02b2de53240))

## [1.1.0](https://github.com/prinsss/twitter-web-exporter/compare/v1.0.10..v1.1.0) - 2024-04-13

### ⛰️  Features

- Migration from v1.0 to v1.1 - ([db5c124](https://github.com/prinsss/twitter-web-exporter/commit/db5c124df65f3e7b83624b78f0b8431fadcb6345))
- Disable some extensions by default - ([8014b9e](https://github.com/prinsss/twitter-web-exporter/commit/8014b9e023a411ffd7c386d7a7a86652582b7916))
- Add ListTimelineModule - ([f2df917](https://github.com/prinsss/twitter-web-exporter/commit/f2df91715f732d23c11b3f66c1eabf7e50690e94))
- Add HomeTimelineModule - ([cbba59e](https://github.com/prinsss/twitter-web-exporter/commit/cbba59e8eae00246661579c2967ccdcf7281d640))
- Add warning when wrong execution context detected - ([fd58190](https://github.com/prinsss/twitter-web-exporter/commit/fd58190360ec395fe0c6993195268835c396d2dd))
- I18n for exporters - ([c8c79c3](https://github.com/prinsss/twitter-web-exporter/commit/c8c79c3815d112fc1b459647937e8faec4c1ed17))
- I18n #17 - ([da76cba](https://github.com/prinsss/twitter-web-exporter/commit/da76cbae6753477bf63e092edf642087a37e70bc))

### 🐛 Bug Fixes

- Detect script execution context - ([f5d7688](https://github.com/prinsss/twitter-web-exporter/commit/f5d768854d1f934fbd7bf67d8926b653307dea94))
- Add missing translation text - ([d2f67a8](https://github.com/prinsss/twitter-web-exporter/commit/d2f67a8978b31c53e23aaab8b1c5b0482eb8f900))
- I18n for media filename template - ([38069a3](https://github.com/prinsss/twitter-web-exporter/commit/38069a300a09c94e5c41cef1c00654fc495cbcb9))

### 📚 Documentation

- Update README - ([1a5d5e8](https://github.com/prinsss/twitter-web-exporter/commit/1a5d5e883e4aad1b1484837fb096bb4162db500a))
- Update README - ([8d95445](https://github.com/prinsss/twitter-web-exporter/commit/8d95445ca9fe71b8f6ee00731fc21f1c83dbf4ee))
- I18n for userscript description - ([fc3e336](https://github.com/prinsss/twitter-web-exporter/commit/fc3e3368a74d83112c6b6bed8a7418a943273fdf))
- Add zh-Hans version of README - ([8c020bd](https://github.com/prinsss/twitter-web-exporter/commit/8c020bda4b77dcfa27e71149724fb3598be2f5f7))

## [1.0.10](https://github.com/prinsss/twitter-web-exporter/compare/v1.0.9..v1.0.10) - 2024-04-10

### 🐛 Bug Fixes

- Add UTF-8 BOM to CSV files - ([daf3e45](https://github.com/prinsss/twitter-web-exporter/commit/daf3e45aebfb44f60b5c8fc462eb15475888825d))

## [1.0.9](https://github.com/prinsss/twitter-web-exporter/compare/v1.0.8..v1.0.9) - 2024-04-07

### ⛰️  Features

- Add URL field to exported files #6 - ([4eba0b4](https://github.com/prinsss/twitter-web-exporter/commit/4eba0b47ac2cbe19dfefb4a5de2a0a6d857db3ad))
- Support custom date time format #8 - ([1fc98ff](https://github.com/prinsss/twitter-web-exporter/commit/1fc98ff4ab9fcbe2c79ed8cb54da3654286d2d29))

## [1.0.8](https://github.com/prinsss/twitter-web-exporter/compare/v1.0.7..v1.0.8) - 2024-03-14

### ⛰️  Features

- Add more debug logs - ([8bb6722](https://github.com/prinsss/twitter-web-exporter/commit/8bb6722c54c2643f568443f9a4361a262c3b202f))
- Add background color for media thumbnail - ([92ad416](https://github.com/prinsss/twitter-web-exporter/commit/92ad4162160d75da768e88311a4d73829f3024e1))

### 🐛 Bug Fixes

- Better responsive design - ([0b5340d](https://github.com/prinsss/twitter-web-exporter/commit/0b5340d95ba96f16fa092d20791e53c19edc4536))
- Parse error when tweet visibility is limited - ([7b707d9](https://github.com/prinsss/twitter-web-exporter/commit/7b707d952762d5e420728c1d3a2e4e91a241d1e6))

### 🎨 Styling

- Fix eslint errors - ([1c97af5](https://github.com/prinsss/twitter-web-exporter/commit/1c97af5dbf80dcaca11dd7bd2b283fbd3ae9bece))

### ⚙️ Miscellaneous Tasks

- Add eslint commitlint husky - ([a18c6ea](https://github.com/prinsss/twitter-web-exporter/commit/a18c6ea9be76435ba3ad1c03f29cdf9688a9dc61))

## [1.0.7](https://github.com/prinsss/twitter-web-exporter/compare/v1.0.6..v1.0.7) - 2024-01-04

### ⛰️  Features

- Show media type and video duration in table - ([5683d6f](https://github.com/prinsss/twitter-web-exporter/commit/5683d6f244dea2c1742ba76cda0cffdb4be31aa4))

### 🐛 Bug Fixes

- Missing tweets in UserMedia - ([34f5b69](https://github.com/prinsss/twitter-web-exporter/commit/34f5b69b19d935fc477a9bfa8e1a5ec40391d7c9))

### 📚 Documentation

- Update README - ([89bf712](https://github.com/prinsss/twitter-web-exporter/commit/89bf7121c8fde4f4c99fed4348e564bbc94c127c))
- Add CHANGELOG - ([4b1a8f4](https://github.com/prinsss/twitter-web-exporter/commit/4b1a8f463bca3d16e4fa7814f0a65fe7c8b3341b))

## [1.0.6](https://github.com/prinsss/twitter-web-exporter/compare/v1.0.5..v1.0.6) - 2024-01-04

### ⛰️  Features

- Implement exporting search results - ([eac6b04](https://github.com/prinsss/twitter-web-exporter/commit/eac6b04012a4b852751584a8befbb2bc34c036c0))
- Support parsing UserMedia - ([f80df50](https://github.com/prinsss/twitter-web-exporter/commit/f80df50b17e688ffa663a177aff14117f9ed48c9))

### 🐛 Bug Fixes

- Avoid exporting undefined values - ([b288201](https://github.com/prinsss/twitter-web-exporter/commit/b288201b0f634876de2e605be2a339a0e25151f6))
- Update style of html exporter - ([ca3aafc](https://github.com/prinsss/twitter-web-exporter/commit/ca3aafc083507866cc169a050b731cbff3852fd4))

## [1.0.5](https://github.com/prinsss/twitter-web-exporter/compare/v1.0.4..v1.0.5) - 2024-01-03

### ⛰️  Features

- Support custom media filename pattern - ([58441aa](https://github.com/prinsss/twitter-web-exporter/commit/58441aa150ad208ad0719c837aed0b7cf69999e8))
- Rename utility files - ([a39334a](https://github.com/prinsss/twitter-web-exporter/commit/a39334ad5de10da39bf31ee88f457df3f6c5560b))

## [1.0.4](https://github.com/prinsss/twitter-web-exporter/compare/v1.0.3..v1.0.4) - 2024-01-03

### ⛰️  Features

- Add instruction for using download manager - ([0095aa4](https://github.com/prinsss/twitter-web-exporter/commit/0095aa4e66b516ab706468206396933f89de24fd))

### 🐛 Bug Fixes

- Missing root style in scoped css - ([b4376ca](https://github.com/prinsss/twitter-web-exporter/commit/b4376caeecf8bb4c80ac10481916a95bb3a7fcc2))

## [1.0.3](https://github.com/prinsss/twitter-web-exporter/compare/v1.0.2..v1.0.3) - 2024-01-01

### ⛰️  Features

- Add better error handling when extracting tweets - ([d5c2d45](https://github.com/prinsss/twitter-web-exporter/commit/d5c2d45a3be29bc73a5a6c7068b1a47cb85b8322))
- Tweak logger buffer - ([8b2d83c](https://github.com/prinsss/twitter-web-exporter/commit/8b2d83c01438f533c04cc2775e2dee4d1fafe9e5))
- Support parsing TweetTombstone type - ([0b51273](https://github.com/prinsss/twitter-web-exporter/commit/0b51273b5e34a100afa8579fbec7947cf15f9cfc))

## [1.0.2](https://github.com/prinsss/twitter-web-exporter/compare/v1.0.1..v1.0.2) - 2024-01-01

### ⛰️  Features

- Add button for exporting media urls - ([b6faf8a](https://github.com/prinsss/twitter-web-exporter/commit/b6faf8af7ce729a841b588957ce381eb4c77ad39))

### 🐛 Bug Fixes

- Handle error when reading retweet source failed - ([8232470](https://github.com/prinsss/twitter-web-exporter/commit/8232470417ccb38aa78b3ab72ce655e784e04cc0))

### 📚 Documentation

- Add section about script limitation - ([2e49e61](https://github.com/prinsss/twitter-web-exporter/commit/2e49e61dbd35bfff92a3a626fcbf08b2892fc149))
- Update README - ([10f5afb](https://github.com/prinsss/twitter-web-exporter/commit/10f5afbd4db55060b0137b0e7e68638ce3526184))

## [1.0.1](https://github.com/prinsss/twitter-web-exporter/compare/v1.0.0..v1.0.1) - 2023-12-31

### 🐛 Bug Fixes

- Use file-saver instead of streamsaver - ([9521d41](https://github.com/prinsss/twitter-web-exporter/commit/9521d41df02d40b125f55a9252781d1575b99def))

## [1.0.0] - 2023-12-30

### ⛰️  Features

- Add README - ([c0c0a9c](https://github.com/prinsss/twitter-web-exporter/commit/c0c0a9c0a4dd255c44a1dfb778a8d6e8882f7a35))
- Add LICENSE - ([b137943](https://github.com/prinsss/twitter-web-exporter/commit/b137943b34d9a83c8771ffa0255d804c7cfad48c))
- Export as CSV and HTML - ([407a0b3](https://github.com/prinsss/twitter-web-exporter/commit/407a0b312c29c42bee4e5beb866d4edd88313404))
- Option to skip retweeted media - ([10b0288](https://github.com/prinsss/twitter-web-exporter/commit/10b02883c614357ecdd1e06af0c2765929fbf17e))
- Export to JSON - ([3689888](https://github.com/prinsss/twitter-web-exporter/commit/3689888cbee80929b42e52d35dc8c84557eb1e1f))
- Show full text for long tweets - ([1d4d670](https://github.com/prinsss/twitter-web-exporter/commit/1d4d6701395487f6394bbc7dcd95a0e1d33812f2))
- Export selected data only - ([682dae3](https://github.com/prinsss/twitter-web-exporter/commit/682dae3c73c33984fc872bed7335659b608afa6f))
- Export and download media - ([e2dfb70](https://github.com/prinsss/twitter-web-exporter/commit/e2dfb700ee009f19671fd1b04ab2fe09d07b60f0))
- Download files with streamsaver - ([9ea7577](https://github.com/prinsss/twitter-web-exporter/commit/9ea7577d8f77505edf533daa94feb4bb78acd1a6))
- Export media from tweets - ([95d38f3](https://github.com/prinsss/twitter-web-exporter/commit/95d38f33608b2d9f9b89a4f535ea45a50e200196))
- New modal view for exporting data - ([b578754](https://github.com/prinsss/twitter-web-exporter/commit/b578754883602f35a87e452f27438fcc1b299e4e))
- Upgrade dependencies - ([5ec12e3](https://github.com/prinsss/twitter-web-exporter/commit/5ec12e3384ee1ee1a018935c7095729f044c46a7))
- Add debug mode option - ([b067631](https://github.com/prinsss/twitter-web-exporter/commit/b0676318c8078eb8cd6b48844ff31b995845a19c))
- Update panel UI - ([738b3f7](https://github.com/prinsss/twitter-web-exporter/commit/738b3f78de1357715d87998552757fbb3718aa7e))
- Add table pagination - ([95dea91](https://github.com/prinsss/twitter-web-exporter/commit/95dea910b79ae4728190a30a328668cbcda51f58))
- Update script metadata - ([add0ee7](https://github.com/prinsss/twitter-web-exporter/commit/add0ee7583ad3e7b787745ee442a1e0247ee774b))
- Format date time - ([8f88023](https://github.com/prinsss/twitter-web-exporter/commit/8f88023d56e3ddf88fefcb0bfc4c455531b220a8))
- Add sorting for tables - ([10191dd](https://github.com/prinsss/twitter-web-exporter/commit/10191dd67e1d664b81e097049155b6e2a5a4f7ea))
- Add searching for tables - ([36ff9e1](https://github.com/prinsss/twitter-web-exporter/commit/36ff9e10c49537bbb4fc702df9f4e56a9ff2b91f))
- Show quote source of tweets - ([c62fb3e](https://github.com/prinsss/twitter-web-exporter/commit/c62fb3e1b5653b09ffb9a6ae271163b06699cf56))
- Add many columns for user table - ([276ef79](https://github.com/prinsss/twitter-web-exporter/commit/276ef793535315ef00ad729170b7210089f85a86))
- Add media preview for images and videos - ([7a2358e](https://github.com/prinsss/twitter-web-exporter/commit/7a2358e415d6fe568d73b41a0985cbf0258e4ce3))
- Add ErrorBoundary - ([8d54c06](https://github.com/prinsss/twitter-web-exporter/commit/8d54c063fd7d970fe73bf7f24e2841e59af04977))
- Show RT source for retweets - ([0b1b31e](https://github.com/prinsss/twitter-web-exporter/commit/0b1b31e4b0f04be91031b58b0e63c0d936be1026))
- Pin the top row of tables - ([2c3fcf2](https://github.com/prinsss/twitter-web-exporter/commit/2c3fcf24eec0139f0442ecc8209c0b4d54adefbb))
- Add table view for tweets - ([eb31d06](https://github.com/prinsss/twitter-web-exporter/commit/eb31d0646d0b8e0b81e16b44d9e4fc6b2c6fef89))
- Add table view for users - ([ba3b769](https://github.com/prinsss/twitter-web-exporter/commit/ba3b769102784f09b4c66cd86538a8d32654a9aa))
- Support loading-more in conversations - ([2101f5b](https://github.com/prinsss/twitter-web-exporter/commit/2101f5b61194c936efb961cee6ccd100299108ff))
- Show module name in error messages - ([421069f](https://github.com/prinsss/twitter-web-exporter/commit/421069f14611e25560b52bd93cfb75328e748c22))
- Add default app options - ([cbdc94b](https://github.com/prinsss/twitter-web-exporter/commit/cbdc94ba7192bf59ec05b6c9fa27216cb28aa479))
- Add new module TweetDetail - ([3fc6972](https://github.com/prinsss/twitter-web-exporter/commit/3fc69723189f520c85c8ad8c00a65dd3def144c6))
- Use different indicator color for tweets - ([f44aa2b](https://github.com/prinsss/twitter-web-exporter/commit/f44aa2b538db0d4e526751cd9a92fbef07afb400))
- Remember last state of control panel - ([0da3df5](https://github.com/prinsss/twitter-web-exporter/commit/0da3df5a059f5fb24f8c03de384a7abb9e9dfb93))
- Add settings panel - ([dad068b](https://github.com/prinsss/twitter-web-exporter/commit/dad068bcc0d1d5c66f74e5c26d15f3acda19e3c1))
- App options manager - ([2e30391](https://github.com/prinsss/twitter-web-exporter/commit/2e30391ec9f6183420c84fbdecc4f30104fa730f))
- Add extractor for likes and bookmarks - ([7afa64f](https://github.com/prinsss/twitter-web-exporter/commit/7afa64f22683a7dd0f633450eeee6d46bcdfc2ec))
- Use generic functions to extract API data - ([af60771](https://github.com/prinsss/twitter-web-exporter/commit/af607719d32fa7eaaed840d6d56f186706945f10))
- Add settings button - ([e848fdf](https://github.com/prinsss/twitter-web-exporter/commit/e848fdff647376cf79512a280e7ff14ed767002f))
- Rewrite UI with tailwind css - ([4b99edc](https://github.com/prinsss/twitter-web-exporter/commit/4b99edc054d27c2b1981b86b3c181e7ec2494159))
- Add daisyUI - ([0658eef](https://github.com/prinsss/twitter-web-exporter/commit/0658eef4c56773165ae6f8d8b18fc25ef6c039a0))
- Rewrite styles with tailwind - ([dce685f](https://github.com/prinsss/twitter-web-exporter/commit/dce685f56415846e092a2428532522b64493319a))
- Add tailwindcss - ([804a8f1](https://github.com/prinsss/twitter-web-exporter/commit/804a8f196a8dde6f765319e5bbf11fd64098c3e5))
- Make dependencies external and use CDN - ([5c062e9](https://github.com/prinsss/twitter-web-exporter/commit/5c062e9037a7e4dca7f31a54d4ce66a46b8e186a))
- Update UI components - ([d1f8415](https://github.com/prinsss/twitter-web-exporter/commit/d1f841537b8b5cb5f2f3b8319fbecbec6b19eb75))
- Core and extension architecture - ([ab5b2c8](https://github.com/prinsss/twitter-web-exporter/commit/ab5b2c89a0bbe8c3db0bf22ec17c4fa251df7a54))
- Initial commit - ([4141646](https://github.com/prinsss/twitter-web-exporter/commit/414164685a182b10a8b1e19943e028c6d2a549f2))

### 🐛 Bug Fixes

- Update script download URL - ([fef73b3](https://github.com/prinsss/twitter-web-exporter/commit/fef73b3648c7e63aedf690dcf2f1c55851a8d76d))
- Duplicate file downloading - ([6c62eeb](https://github.com/prinsss/twitter-web-exporter/commit/6c62eebfa602bbbed20d256ad12663636a075351))
- Support API endpoints when not signed in - ([e3faf85](https://github.com/prinsss/twitter-web-exporter/commit/e3faf8531a92ba7393615ded8b2a28fe887198ef))
- Use local version of useSignal - ([69e24d0](https://github.com/prinsss/twitter-web-exporter/commit/69e24d0e96ea3151068e984bc4bee52cc1fb8f59))

### 🚜 Refactor

- Rearrange source files - ([fe71f4c](https://github.com/prinsss/twitter-web-exporter/commit/fe71f4c700d2da6ed0c22583d1294399b93be59a))
- Update signal hooks - ([602323b](https://github.com/prinsss/twitter-web-exporter/commit/602323b88a1d93a81ee83ed37e24f6ceaf34262c))
- Use icons from npm package - ([67e0a8e](https://github.com/prinsss/twitter-web-exporter/commit/67e0a8ea940a08e68c217845414da1dc2c69d46a))
- Remove button components - ([a1c31ea](https://github.com/prinsss/twitter-web-exporter/commit/a1c31eae77e4bf3560708f05337a5ff3820a2f6a))
- Add type predicate utils for API - ([ad1f7dc](https://github.com/prinsss/twitter-web-exporter/commit/ad1f7dc78377cc0e27e4c60cb5b3deca4868dbc8))
- Simplify common modal component - ([6416a29](https://github.com/prinsss/twitter-web-exporter/commit/6416a2992dd88e598f37efc907e907e98763c2dc))
- Extension manager and extension class - ([1ba5c1a](https://github.com/prinsss/twitter-web-exporter/commit/1ba5c1a9cbcbb68a9bf6c15dd7218013ac9e974c))
- Remove tailwind-merge - ([f4cc3ed](https://github.com/prinsss/twitter-web-exporter/commit/f4cc3edc11813d10764f32664ba6fe270dfc0301))
- Merge module files - ([baa592d](https://github.com/prinsss/twitter-web-exporter/commit/baa592d88e8d8456a33861ebb386263e1a2050e3))
- Reuse module UI - ([a4fef7b](https://github.com/prinsss/twitter-web-exporter/commit/a4fef7b8ab0a900e3006a3ee224573153c97fb9b))

### 📚 Documentation

- Refine error messages - ([577c064](https://github.com/prinsss/twitter-web-exporter/commit/577c0643b50eea87fb9c61cb609427f25943a0e4))

### 🎨 Styling

- Sort module imports - ([49ce189](https://github.com/prinsss/twitter-web-exporter/commit/49ce189ff76570f30dbe2712396d218483a394b7))
- Rename ModuleUI component - ([0dd2238](https://github.com/prinsss/twitter-web-exporter/commit/0dd223837a2c13dc0d077f515500b8017fded570))
- Sort module imports - ([53feeb4](https://github.com/prinsss/twitter-web-exporter/commit/53feeb4de9172c88d7a3924d2a092890681e6532))

### ⚙️ Miscellaneous Tasks

- Update tsconfig.json - ([99894f6](https://github.com/prinsss/twitter-web-exporter/commit/99894f6c5864d0bf0d27ee24bd9e099f6312ccd1))
- Pin dependencies version - ([37c975b](https://github.com/prinsss/twitter-web-exporter/commit/37c975b6358df8498c9061265f169434ab385eb2))

<!-- generated by git-cliff -->

# Write me!

[![License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

This is an interactive generator for creating readme files according to the [appcom readme styleguide](https://github.com/appcom-interactive/appcom-styleguide-readme). 
You can use it to create a basic README.me file for your project (i.e. module/library, solution, styleguide).

## Usage
After installation you can run
```
writeme 
```
and the interactive generator will start. After completing it your README.md file is created and you can edit it to your liking.

For skipping the interactive process entirely you can provide the type parameter. See API section for more information 
on parameters.
```
writeme --type=module
```

## API
```
Usage: writeme [options]

This is an interactive generator for creating readme files according to the appcom readme styleguide

Options:
  -V, --version      output the version number
  -t, --type [type]  Set the type of software the readme is refering to (currently supported: module, solution, styleguide) (default: "")
  -n, --name [name]  Set the name of the software (default: "")
  -d, --dir [dir]    Set the directory where the readme is placed (default: ".")
  -h, --help         output usage information
```

## Installation
You can install this tool by running 
```
npm i -g @appcominteractive/writeme
```

It requires you to have npm and node installed.

## Contributing
Bug reports and pull requests are welcome on GitHub at {URL}. This project is intended to be a safe, welcoming space for
collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License
Copyright 2019 appcom interactive GmbH

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

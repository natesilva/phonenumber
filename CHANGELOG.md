The changelog can now be found on the [Releases](https://github.com/natesilva/phonenumber/releases) page.

## Previous release notes:

### Version 1.5.0

12-Oct-2018

- Recognize toll-free numbers with an NXX ending in `11` as valid. Non-toll-free numbers
  with an NXX ending in `11` are not valid.

### Version 1.4.0

12-Oct-2018

- Gracefully handle `null`, `undefined`, or non-`string` values passed as phone number
  args.

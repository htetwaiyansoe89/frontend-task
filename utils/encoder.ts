export default function getEncodedAuth(): string {
  const Buffer = require("buffer").Buffer;
  return new Buffer("pkey_test_5wvisbxphp1zapg8ie6").toString("base64");
}

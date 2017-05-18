const makeHTML =require('../index.js');

test ('makehtML empty string',()=>{
let actual = makeHTML('');
let expected = '<p></p>';
expect(actual).toBe(expected);
});

test ('makeHTML normal string',()=>{
  expect(makeHTML("hej")).toBe('<p>hej</p>');
});
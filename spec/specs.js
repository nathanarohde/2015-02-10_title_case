describe('titleCase', function() {
  it('capitalizes the first letter of a word', function() {
    expect(titleCase('cat')).to.equal('Cat');
  });

  it('downcases the input and capitalizes only the first letter', function() {
    expect(titleCase('CAT')).to.equal('Cat');
  });

  it('downcases the input and capitalizes only the first letter (mixed letters)', function() {
    expect(titleCase('miXEdUp')).to.equal('Mixedup');
  });

  it('capitalizes multiple words', function() {
    expect(titleCase('mr. cat')).to.equal('Mr. Cat');
  });

  it('does not capitalize some articles, coordinating conjuctions and prepositions when they are not the first word of a title', function() {
    expect(titleCase('a series of unfortunate events and stuff.')).to.equal('A Series of Unfortunate Events and Stuff.');
  });

});

export const haikuLineKeyUp = (content, syllables, index) => ({
  type: 'HAIKU_LINE_KEYUP',
  content,
  syllables,
  index
});

export const haikuAuthorKeyUp = author => ({
  type: 'HAIKU_AUTHOR_KEYUP',
  author
});

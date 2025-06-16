const Link = ({ hrefLink, text, targetBlank }) => {
  return (
    <a
      href={hrefLink || '#'}
      target={targetBlank ? '_blank' : ''}
      rel="noopener noreferrer"
    >
      {text || 'Default Link Text'}
    </a>
  );
};

export default Link;

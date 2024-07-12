function ListaLinks() {
  const links = [
    { text: 'Plano de Desenvolvimento Institucional', href: 'https://iftm.edu.br/plano-desenvolvimento' },
  ];

  return (
    <>
    <div className="box-lista">
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href}>{link.text}</a>
        </li>
      ))}
    </ul>
    </div>
    </>
  );
};

export default ListaLinks;

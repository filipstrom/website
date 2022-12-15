import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Välkommen till denna hemsida!</h1>
        <p>Här kan man hitta naturhamnar av olika slag.</p>
      </header>
      <main>
        <section>
          <h2>Lista med de mest populäraste</h2>
          <p>Står i ingen speciell ording.</p>
        </section>
        <section className='habour_list'>
          <h2>Interests</h2>
          <ul className="Home-ul">
            <li>Trädhamnen</li>
            <li>skogshamnen</li>
            <li>AnkarHmanen</li>
            <li>Viken</li>
          </ul>
        </section>
        <section>
          <h2>Annat</h2>
          <p>strunt prat.</p>
        </section>
      </main>
    </div>
  );
}

export default Home;

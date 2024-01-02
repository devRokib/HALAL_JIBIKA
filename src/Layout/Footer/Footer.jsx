import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer">
      <div className="footerColumn">
        <h3>Column 1</h3>
        <p>Content for column 1 goes here.</p>
      </div>
      <div className="footerColumn">
        <h3>Column 2</h3>
        <p>Content for column 2 goes here.</p>
      </div>
      <div className="footerColumn">
        <h3>Column 3</h3>
        <p>Content for column 3 goes here.</p>
      </div>
      </div>
      <div className="footerBottom"></div>
    </footer>
  );
}

export default Footer;


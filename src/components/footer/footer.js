import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <span>
          <a href="https://github.com/Amikola" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {" | "}
          <a href="https://www.linkedin.com/in/atte-ikola-35941a263" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {" | "}
          <a href="mailto:atte.ikola@gmail.com">
            atte.ikola@gmail.com
          </a>
        </span>
        <br />
        <span>© 2026 Atte Ikola. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
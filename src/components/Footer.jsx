function Footer() {
  return (
    <>
      <footer>
        &copy; Copyright{" "}
        {new Date().getFullYear() !== 2023
          ? `2023 – ${new Date().getFullYear()}`
          : new Date().getFullYear()}
        , Maksim Stojkovic
      </footer>
    </>
  );
}

export default Footer;

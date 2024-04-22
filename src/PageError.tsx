import Root from "./Root";

export default function PageError() {
  return (
    <>
      <Root />
      <div className="page-error">
        Une erreur s'est produite ou cette page n'existe pas
      </div>
    </>
  );
}

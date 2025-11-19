import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <section className="grid gap-6 max-w-3xl mx-auto py-10">
      <Helmet>
        <title>Contact — Portfolio</title>
        <meta
          name="description"
          content="Contactez Abla Marghoub — email, téléphone et informations personnelles."
        />
      </Helmet>

      <h1 className="text-3xl font-bold">Contact</h1>

      <p className="text-muted-foreground">
        Vous pouvez me contacter via les informations ci-dessous.
      </p>

      <div className="border rounded-2xl p-6 shadow-sm bg-white">
        <ul className="space-y-3 text-lg">
          <li>
            <span className="font-semibold text-foreground dark:text-white">Nom complet :</span>{" "}
            MARGHOUB Abla
          </li>

          <li>
            <span className="font-semibold">Email :</span>{" "}
            <a
              href="mailto:a.marghoub5257@uca.ac.ma"
              className="underline text-blue-600"
            >
              a.marghoub5257@uca.ac.ma
            </a>
          </li>

          <li>
            <span className="font-semibold">Téléphone :</span>{" "}
            <a href="tel:0660129596" className="underline text-blue-600">
              0660129596
            </a>
          </li>
        </ul>
      </div>

    </section>
  );
}

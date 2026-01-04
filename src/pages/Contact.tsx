import { Helmet } from "react-helmet-async";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_ab",
        "template_dhf6458",
        { from_name: form.name, from_email: form.email, message: form.message },
        "UYvcAk_b6b1NI7Sbw"
      );
      setSuccess("Message envoyé avec succès !");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setSuccess("Erreur lors de l'envoi. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid gap-4 sm:gap-6 max-w-3xl mx-auto py-6 sm:py-10">
      <Helmet>
        <title>Contact — Portfolio</title>
        <meta
          name="description"
          content="Contactez Abla Marghoub — email, téléphone et informations personnelles."
        />
      </Helmet>

      <h1 className="text-2xl sm:text-3xl font-bold fade-in">Contact</h1>

      <p className="text-sm sm:text-base text-muted-foreground fade-in">
        Vous pouvez me contacter via les informations ci-dessous.
      </p>

      <div className="border rounded-2xl p-4 sm:p-6 shadow-sm bg-card fade-in">
        <ul className="space-y-3 text-base sm:text-lg mb-6">
          <li className="break-words">
            <span className="font-semibold text-foreground dark:text-foreground">Nom complet :</span>{" "}
            MARGHOUB Abla
          </li>

          <li className="break-words">
            <span className="font-semibold">Email :</span>{" "}
            <a href="mailto:a.marghoub5257@uca.ac.ma" className="underline text-primary break-all">
              a.marghoub5257@uca.ac.ma
            </a>
          </li>

          <li>
            <span className="font-semibold">Téléphone :</span>{" "}
            <a href="tel:0660129596" className="underline text-primary">
              0660129596
            </a>
          </li>
        </ul>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="name">Nom</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="border rounded px-3 py-2 bg-background text-foreground"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="border rounded px-3 py-2 bg-background text-foreground"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            className="border rounded px-3 py-2 bg-background text-foreground"
            rows={5}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-primary text-primary-foreground rounded px-4 py-2 hover:scale-105 transition-transform"
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>

          {success && <p className="text-sm text-muted-foreground">{success}</p>}
        </form>
      </div>
    </section>
  );
}

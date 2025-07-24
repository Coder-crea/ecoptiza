import React from "react";
import "./ContactForm.css";
import { useLayoutEffect } from "react";
const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const number = formData.get("number");
    const email = formData.get("email");
    const message = formData.get("message");

    const text = `📞 Новое сообщение с сайта:
Имя: ${name}
Телефон: ${number}
Email: ${email}
Сообщение:
${message}`;

    const token = "7980825984:AAEj2E7Y2qbRy3pUAgJGCRKyUYkOlvkwLfA";
    const chatId = "5505882845";

    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      });

      alert("Спасибо! Сообщение отправлено.");
      e.target.reset();
    } catch (err) {
      alert("Ошибка при отправке. Попробуйте позже.");
      console.error(err);
    }
  };
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <section className="contact-form-section">
      <div className="container">
        <h2>Оставьте заявку</h2>
        <p>Заполните форму — и мы свяжемся с вами в ближайшее время.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Ваше имя" required />
          <input type="tel" name="number" placeholder="Ваш номер" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Сообщение" required />

          <button type="submit">Отправить</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

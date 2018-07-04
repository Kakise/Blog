---
title: Contactez-moi !
layout: page
---
Utilisez le formulaire si dessous afin de m'envoyer un message !
{% raw %}
<form name="contact" netlify-honeypot="bot-field" netlify>
<p style="display: none;">
<label>Remplissez si vous êtes un bot: <input name="bot-field" /></label>
</p>
<label>
Nom
</label><br>
<input type="text" name="name" /><br>
<label>
Email
</label><br>
<input type="email" name="email" /><br>
<label>
Message
</label><br>
<textarea name="message" rows="15" cols="25"></textarea><br>
<div data-netlify-recaptcha></div>
<a href="javascript:;" onclick="parentNode.submit();">Envoyer <i class="fas fa-arrow-circle-up"></i></a>
</form>
{% endraw %}

---
layout: doc
---

# Contact

***Connect with us!***

| <a href="mailto:teamtokyoarchive@gmail.com" target="_blank" rel="noreferrer">email</a> | [instagram](https://instagram.com/tokyo__archives) | [website](https://tokyoarchives.co) |
| ----- | -----| -----|

<div> Send us a message!

<p>Name (optional): {{ name }}</p>
<input v-model="name" placeholder="Name" />

<p>Email Address: {{ email }}</p>
<input v-model="email" placeholder="email@gmail.com" />

<p>Message: {{ message }}</p>
<textarea v-model="message" placeholder="Your message goes here"></textarea>

<button>Submit</button>
</div>
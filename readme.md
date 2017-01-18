**React component for auto completing email fields.**


**Demo:**
<a href="http://codepen.io/bullet_tooth/pen/zNGrWw" target="_blank">CodePen</a>

**Installation:**
```node
npm install react-email-completer --save
```


**Usage:**
```javascript
import EmailCompleter from 'react-email-completer';
import 'react-email-completer/dist/email-completer.css';

//...

<div>
  <EmailCompleter type="email" placeholder="Email" domains={ ["gmail.com", "yahoo.com"] } />
<div/>
```


**Feature:** Keyboard events (up, down, enter)

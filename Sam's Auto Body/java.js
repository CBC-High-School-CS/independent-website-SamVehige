function redirectToNasdaq(event) {
    event.preventDefault();
    const query = document.getElementById('searchinput').value.trim().toUpperCase();
    if (query) {
      window.location.href = `https://www.nasdaq.com/market-activity/stocks/${query}`;
      function goToWebsite() {
        const input = document.getElementById(searchinput).value;
        let url = input.trim();
        window.open(url,'_blank');
        return false;

      }
    }
}
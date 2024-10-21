document.addEventListener('DOMContentLoaded', function() {
    let resultsDiv = document.getElementById('results');
    let errorDiv = document.getElementById('error');
  
    // Get the active tab and its URL
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      let tab = tabs[0];
      let url = new URL(tab.url);
      let domain = url.hostname;
  
      // Display the domain name in the input field or directly fetch the WHOIS info
      document.getElementById('domainInput').value = domain;
  
      // Automatically trigger WHOIS lookup for the current domain
      fetchWhoisInfo(domain);
    });
  
    // Function to fetch WHOIS information and IP address
    function fetchWhoisInfo(domain) {
      resultsDiv.innerHTML = '';
      errorDiv.innerHTML = '';
  
      if (!isValidDomain(domain)) {
        errorDiv.innerText = 'Invalid domain.';
        return;
      }
  
      // Call WHOIS API
      fetch(`https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_o9AROidhroREbapujWDzDd5fvTJJb&domainName=${domain}&outputFormat=json`)
        .then(response => response.json())
        .then(data => {
          if (data && data.WhoisRecord) {
            let whoisInfo = data.WhoisRecord;
            
            // Display WHOIS info
            let output = `
              <h3 align="center">Domain Info</h3>
              <p><strong>Domain Name:</strong> ${whoisInfo.domainName}</p>
              <p><strong>Registrar:</strong> ${whoisInfo.registrarName}</p>
              <p><strong>Creation Date:</strong> ${whoisInfo.createdDate}</p>
              <p><strong>Expiration Date:</strong> ${whoisInfo.expiresDate}</p>
            `;
            resultsDiv.innerHTML = output;
  
            // Fetch the IP address using a DNS lookup service (e.g., ipify.org)
            fetch(`https://api.ipify.org?domain=${domain}&format=json`)
              .then(ipResponse => ipResponse.json())
              .then(ipData => {
                let ipOutput = `<p><strong>IP Address:</strong> ${ipData.ip}</p>`;
                resultsDiv.innerHTML += ipOutput;
              })
              .catch(error => {
                console.error('Error fetching IP address:', error);
                resultsDiv.innerHTML += '<p><strong>IP Address:</strong> Error retrieving IP address.</p>';
              });
          } else {
            errorDiv.innerText = 'No WHOIS information found for this domain.';
          }
        })
        .catch(error => {
          console.error('Error fetching WHOIS data:', error);
          errorDiv.innerText = 'Error fetching WHOIS information.';
        });
    }
  
    // Simple domain validation
    function isValidDomain(domain) {
      const domainPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return domainPattern.test(domain);
    }
  });
  
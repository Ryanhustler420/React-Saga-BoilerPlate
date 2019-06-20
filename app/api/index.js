export function createLink({topicName, url, description}) {
  return fetch(`http://localhost:3000/api/topics/${topicName}/links`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url,
      description
    })
  }).then(response => response.json());
}

export function updateVoteapi(email = 'g@g.com', LinkId) {
  return fetch(`/api/links/${LinkId}/vote`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      increment: 1 
    })
  }).then(response => response.json());
}
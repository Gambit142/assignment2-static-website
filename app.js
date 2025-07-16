function getGroupMembers() {
  return ['Francis Ugorji', 'Henilkumar Patel', 'Varun Amin', 'Chahat Patel'];
}

function renderMembers() {
  const members = getGroupMembers();
  const ul = document.getElementById('group-members');
  if (ul) {
    members.forEach(name => {
      const li = document.createElement('li');
      li.textContent = name;
      ul.appendChild(li);
    });

    const heading = document.querySelector('h2');
    if (heading) {
      heading.textContent = `Total Members: ${members.length}`;
    }
  }
}

// Only call renderMembers if running in a browser
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', renderMembers);
}

// Export the pure function for testing
if (typeof module !== 'undefined') {
  module.exports = { getGroupMembers };
}

The solution involves adding a check to ensure that params is not undefined before using it.

```javascript
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function UserProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userId) {
      // Fetch user data based on userId.  Handle potential errors here.
      fetch(`/api/users/${userId}`) 
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(error => console.error('Error fetching user:', error));
    }
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile: {user.name}</h1>
      {/* Display user details */}
    </div>
  );
}

export default UserProfile;
```
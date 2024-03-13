import React, { useState, useEffect } from 'react';

function StoryTabsPage() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://child.onrender.com/api/sciencefiction')
      .then(response => response.json())
      .then(data => {
        setStories(data);
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="container mt-4">
  <h1 className="mb-4">All Stories</h1>
  <div className="row row-cols-1 row-cols-md-3">
    {stories.map(story => (
      <div key={story.id} className="col mb-4">
        <div className="card h-100 border-0 shadow">
          {story.Image && <img className="card-img-top" src={`https://ik.imagekit.io/dev24/${story.Image}`} alt="" />}
          <div className="card-body">
            <h5 className="card-title">{story.Title}</h5>
            <h5 className="card-title">{story.Status}</h5>
            <p className="card-text">{story.description}</p>
            
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default StoryTabsPage;

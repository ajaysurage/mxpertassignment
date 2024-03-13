import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://child.onrender.com/api/sciencefiction')
      .then(response => response.json())
      .then(data => {
        const updatedData = data.map((story, index) => ({
          ...story,
          Image: `https://ik.imagekit.io/dev24/${story.Image}`,
          id: index
        }));
        setStories(updatedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Science Fiction Stories</h1>
      <div className="row row-cols-1 row-cols-md-4">
        {stories.map(story => (
          <div key={story.id} className="col mb-4">
            <div className="card rounded shadow-sm p-2" style={{ width: '18rem' }}>
              {story.Image && <img className="card-img-top rounded-top" src={story.Image} alt="" />}
              <div className="card-body">
                <h5 className="card-title">{story.Title}</h5>
                <p className="card-text">{story.description}</p>
                {
                  story.Status && story.Status === 'New' ?
                    <a href="/" className="btn btn-primary d-flex w-25 m-auto">{story.Status}</a>
                    :
                    <a href="/" className="btn btn-warning d-flex w-50 m-auto">{story.Status}</a>
                }
                <Link to={`/story/${story.id}`} className="btn btn-success d-block mt-3">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

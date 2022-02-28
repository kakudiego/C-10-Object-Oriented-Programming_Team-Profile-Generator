// create the employees section
const generateProjects = (projectsArr) => {
  return `
    <section class="my-3" id="portfolio">
      <div class="flex-row justify-space-between">

      ${projectsArr
        .map(({ managerName, id, email, office }) => {
          console.log(email);
          return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">${managerName}</h3>
              
            <p>Email: ${email}</p>
            <p>Employee ID: ${id}</p>
            <p>Office Number: ${office}</p>
          </div>
        `;
        })
        .join('')}
      ${projectsArr
        .map(({ name, description, email, github }) => {
          console.log(email);
          return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="portfolio-email">
              Email:
              ${email}
            </h5>
            <p>${description}</p>
            <p>${github}</p>
          </div>
        `;
        })
        .join('')}
    
      </div>
    </section>
  `;
};

// export function to generate entire page
module.exports = (templateData) => {
  // destructure page data by section
  const { employees } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
        <nav class="flex-row">
        </nav>
      </div>
    </header>
    <main class="container my-5">
      ${generateProjects(employees)}
    </main>
    <footer class="container text-center py-3">
    </footer>
  </body>
  </html>
  `;
};

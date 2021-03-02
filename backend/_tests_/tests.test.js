const express = require('express');
const routes = require("../routes.js");
const request = require('supertest');

// create an instance of an express app
const app = express();
// set up routes
app.use("/", routes);

// starter test
it('does Jest work', () => {
  expect(1).toBe(1)
})


// test for all products
describe('Get all products', () => {
  it('Should get all the reviews given a good GET request', async () => {
    await request(app)
    .get('/ratings/reviews')
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200);
  });
  it('Should return a 404 status code given a bad GET request', async () => {
    await request(app)
      .get('/ratings/874khf9')
      .expect(404);
  });
  it('Should return correct review data', async () => {
    const { body } = await request(app)
      .get('/ratings/reviews');
      expect(body).toEqual({
        "product": "18445",
        "page": 0,
        "count": 10,
        "results": [
            {
                "review_id": 215171,
                "rating": 4,
                "summary": "Eligendi magni dolorum.",
                "recommend": true,
                "response": null,
                "body": "Rerum nihil dignissimos placeat reprehenderit nihil quod eum qui. Maxime molestias nemo quibusdam facere. Eveniet ad et sequi.",
                "date": "2020-03-04T00:00:00.000Z",
                "reviewer_name": "Maximus.Renner",
                "helpfulness": 27,
                "photos": [
                    {
                        "id": 364238,
                        "url": "https://images.unsplash.com/photo-1558422504-3d17542c1799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    }
                ]
            },
            {
                "review_id": 215175,
                "rating": 1,
                "summary": "Repellat et rem commodi unde ut.",
                "recommend": false,
                "response": null,
                "body": "Sint in neque accusantium eveniet sint dolores. Quis nesciunt fuga magni provident et atque expedita. Rerum dignissimos corporis facere mollitia tempore. Cumque aut tempore.",
                "date": "2021-01-25T00:00:00.000Z",
                "reviewer_name": "Lloyd.Koepp",
                "helpfulness": 25,
                "photos": [
                    {
                        "id": 364232,
                        "url": "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
                    },
                    {
                        "id": 364233,
                        "url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    }
                ]
            },
            {
                "review_id": 215172,
                "rating": 3,
                "summary": "Qui rerum voluptatum.",
                "recommend": true,
                "response": null,
                "body": "Aut consequatur voluptas dolore ut illo impedit. Aut laborum velit sunt. Repellendus reprehenderit qui impedit. Voluptatem laboriosam quia quisquam. In molestiae non explicabo.",
                "date": "2020-03-21T00:00:00.000Z",
                "reviewer_name": "Ethelyn45",
                "helpfulness": 23,
                "photos": [
                    {
                        "id": 364237,
                        "url": "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    }
                ]
            },
            {
                "review_id": 215176,
                "rating": 2,
                "summary": "Nesciunt alias non ea sunt repellendus ab.",
                "recommend": true,
                "response": null,
                "body": "Incidunt ex maiores esse dolorum ut harum excepturi sunt optio. Non quis earum qui qui. Labore nostrum placeat voluptate quaerat et. Atque suscipit est voluptas quae corporis minus consectetur sit velit. Nobis sit quibusdam voluptatem corporis molestiae quisquam illum id.",
                "date": "2020-03-24T00:00:00.000Z",
                "reviewer_name": "Caden68",
                "helpfulness": 19,
                "photos": [
                    {
                        "id": 364230,
                        "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                    },
                    {
                        "id": 364231,
                        "url": "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    }
                ]
            },
            {
                "review_id": 215168,
                "rating": 1,
                "summary": "Explicabo occaecati doloremque cum consequatur ea et eos.",
                "recommend": false,
                "response": null,
                "body": "Dolore distinctio quam eaque. Ad eveniet blanditiis praesentium eligendi. Et nesciunt assumenda aperiam culpa. Est iusto laborum dolore laborum.",
                "date": "2020-12-14T00:00:00.000Z",
                "reviewer_name": "Velma18",
                "helpfulness": 18,
                "photos": [
                    {
                        "id": 364244,
                        "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                    },
                    {
                        "id": 364245,
                        "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                    }
                ]
            },
            {
                "review_id": 215174,
                "rating": 1,
                "summary": "Optio sed ipsum occaecati repellat.",
                "recommend": false,
                "response": null,
                "body": "Sit non consequatur voluptatem rerum atque. Eum dolore reprehenderit est officiis. Facere esse velit a assumenda amet nemo esse at qui. Expedita cumque quisquam iusto deleniti necessitatibus atque sed quo doloribus.",
                "date": "2020-04-03T00:00:00.000Z",
                "reviewer_name": "Kamren.Kris24",
                "helpfulness": 13,
                "photos": [
                    {
                        "id": 364234,
                        "url": "https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    }
                ]
            },
            {
                "review_id": 215173,
                "rating": 3,
                "summary": "Amet voluptatum placeat qui.",
                "recommend": true,
                "response": null,
                "body": "Esse tenetur aut debitis nam voluptas sed facilis. Omnis sunt est illum adipisci maxime eos. Nulla non quo. Exercitationem ex quo tempore at et quisquam labore nulla.",
                "date": "2021-01-04T00:00:00.000Z",
                "reviewer_name": "Ruthe.Lueilwitz",
                "helpfulness": 11,
                "photos": [
                    {
                        "id": 364235,
                        "url": "https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "id": 364236,
                        "url": "https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2764&q=80"
                    }
                ]
            },
            {
                "review_id": 215170,
                "rating": 2,
                "summary": "Sint doloremque aut quae.",
                "recommend": true,
                "response": null,
                "body": "Quod perferendis sed sit eligendi illum molestias beatae ipsa. Adipisci sed soluta veniam reiciendis distinctio molestiae molestiae a. Mollitia quibusdam ex harum repellat odio commodi quia. Aut ab ipsam quibusdam atque ut necessitatibus. Aut et quasi officiis tempore beatae recusandae est reprehenderit illum. Dolorum repellat consequatur officiis.",
                "date": "2021-01-30T00:00:00.000Z",
                "reviewer_name": "Eugenia71",
                "helpfulness": 10,
                "photos": [
                    {
                        "id": 364239,
                        "url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
                    },
                    {
                        "id": 364240,
                        "url": "https://images.unsplash.com/photo-1462833867037-0f06eab31cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                    }
                ]
            },
            {
                "review_id": 215169,
                "rating": 1,
                "summary": "Numquam molestiae dicta consequatur.",
                "recommend": false,
                "response": null,
                "body": "Veritatis et omnis debitis amet quibusdam est velit. Ex eveniet qui dignissimos dolorem est consequuntur. Facilis quibusdam cumque iusto labore consequuntur. Ut sapiente ipsum saepe accusamus. Fugit adipisci voluptas vel placeat dignissimos dolorem placeat ea sit.",
                "date": "2020-10-15T00:00:00.000Z",
                "reviewer_name": "Damien.Mertz38",
                "helpfulness": 10,
                "photos": [
                    {
                        "id": 364241,
                        "url": "https://images.unsplash.com/photo-1558118070-09ba9a9efb2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "id": 364242,
                        "url": "https://images.unsplash.com/photo-1430390456011-25ac9244999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "id": 364243,
                        "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                    }
                ]
            },
            {
                "review_id": 215167,
                "rating": 3,
                "summary": "Sed velit vel impedit nulla deserunt eius.",
                "recommend": true,
                "response": null,
                "body": "Qui nulla unde dignissimos aut in eos consequatur non. Est praesentium nesciunt reiciendis qui ut eligendi voluptatem. Nobis quasi et unde. Quam fuga velit suscipit qui. Qui distinctio eum ea eveniet doloremque totam voluptates. Et consequuntur doloribus illo accusamus.",
                "date": "2020-04-18T00:00:00.000Z",
                "reviewer_name": "Matilda.Rath",
                "helpfulness": 5,
                "photos": [
                    {
                        "id": 364246,
                        "url": "https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "id": 364247,
                        "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
                    }
                ]
            }
        ]
    });
  });
});

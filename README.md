# CS361_Microservice

# Image microservice

# To use this API make a POST request to API endpoint

Example, using the fetch() API:

```ts
interface ImageRequest {
  bookTitle: string;
  orientation?: "all" | "horizontal" | "vertical";
}

const request: ImageRequest = {
  bookTitle: [BOOK TITLE],
  orientation: 'vertical'
};

const IMG_SERVICE = "https://wgnlzahnglcdktkuhomx.supabase.co/functions/v1/get-book-image";

const imageRes = await fetch(
  IMG_SERVICE,
  {
    method: 'POST',
    body: JSON.stringify(request)
  } as RequestInit
);
const response: ImageResponse = await imageRes.json()
interface ImageResponse {
  webformatURL: string;
  largeImageURL: string;
}
```

# UML

# ![alt text](https://github.com/puczkowskyjp/CS361_Microservice/blob/main/public/UML.png?raw=true)

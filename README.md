# CS361_Microservice

# Image microservice
> [!IMPORTANT]
> API URL: https://wgnlzahnglcdktkuhomx.supabase.co/functions/v1/get-book-image

# To use this API make a POST request to API endpoint
<p>
  interface ImageRequest {
  bookTitle: string;
  orientation?: "all" | "horizontal" | "vertical";
  }
</p>

For example, using the fetch() API:
const request: ImageRequest = {
  bookTitle: [BOOK TITLE],
  orientation: 'vertical'
};
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

# UML
# ![alt text](https://github.com/puczkowskyjp/CS361_Microservice/blob/main/public/UML.png?raw=true)
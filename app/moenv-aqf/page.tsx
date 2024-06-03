import MoenvAQFContainer from "@/components/moenv-aqf-container";

const MyPage = () => {
  const apiKey: string = process.env.API_KEY || "";
  console.log(apiKey);

  return (
    <>
      <MoenvAQFContainer api_key={apiKey} />
    </>
  );
};

export default MyPage;

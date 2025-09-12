import { CongressService } from "@/lib/services/congress.service";
import ContentDisplay from "./components/ContentDisplay";
import { TranslucentBoxContainer } from "@/components/shared/TranslucentBoxContainer";

type SearchProps = Promise<{ q?: string, s?: string }>;

export default async function CongressesPage(props: {
  searchParams: SearchProps;
}) {
  const { q = "", s = "0" } = await props.searchParams;
  const skip = parseInt(s) || 0;
  const initialResults = await new CongressService().getCongresses(q, skip);

  return (
    <TranslucentBoxContainer>
      <ContentDisplay initialQ={q} initialResults={initialResults} />
    </TranslucentBoxContainer>
  );
}

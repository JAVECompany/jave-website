import type { PolicyDocument } from "../../_types/policy";
import PolicyIntro from "../intro/PolicyIntro";
import PolicyNavigation from "../navigation/PolicyNavigation";
import PolicyArticle from "../article/PolicyArticle";

type PolicyViewProps = {
    policy: PolicyDocument;
};

export default function PolicyView({ policy }: PolicyViewProps) {
    return (
        <>
            <PolicyIntro />
            <PolicyNavigation selectedSlug={policy.slug} />
            <PolicyArticle policy={policy} />
        </>
    );
}

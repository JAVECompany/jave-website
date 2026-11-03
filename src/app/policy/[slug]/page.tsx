import type { Metadata } from "next";
import { policyItems } from "../../../data/policies";
import { getPolicy } from "../_lib/get-policy";
import PolicyView from "../_components/view/PolicyView";

type PolicyDetailPageProps = {
    params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
    return policyItems.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PolicyDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const policy = getPolicy(slug);

    return { title: policy.label, description: policy.description };
}

export default async function PolicyDetailPage({ params }: PolicyDetailPageProps) {
    const { slug } = await params;

    return <PolicyView policy={getPolicy(slug)} />;
}

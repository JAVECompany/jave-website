import type { Metadata } from "next";
import { defaultPolicy } from "../../data/policies";
import { getPolicy } from "./_lib/get-policy";
import PolicyView from "./_components/view/PolicyView";

const policy = getPolicy(defaultPolicy.slug);

export const metadata: Metadata = {
    title: policy.label,
    description: policy.description,
};

export default function PolicyPage() {
    return <PolicyView policy={policy} />;
}

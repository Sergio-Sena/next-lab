import { useRouter } from "next/router";

export default function comAutorizacao() {
    const estaLogado = false;

    return (props) => {
        if (typeof window === "undefined") {
            return null;
        }
        const router = useRouter();

        if (estaLogado) {
            router.push('/home');
            return null;
        }

        router.push('/login');
        return null;
    };
}

interface PageProps {
    title: string;
    content?: string;
}

const Page: React.FC<PageProps> = ({ title='Dashboard Page', content }) => {
    return (
        <div>
            <p>{title}</p>
        </div>
    );
};

export default Page;
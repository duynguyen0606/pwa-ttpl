function Index({ params }: { params: { slug: string } }) {
    const { slug } = params;
    return (
        <div>
            <h1>Chi tiết thủ tục {slug}</h1>
        </div>
    );
}

export default Index;

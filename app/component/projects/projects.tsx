export function Projects({loaderData}: {loaderData: {avatar: string, firstName: string, lastName: string, fullName: string}[]}) {
    const avatars = loaderData;
    console.log(avatars)
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center w-full">
                <div className="w-full">
                    <h1 className="text-5xl font-bold">Projects</h1>
                    <p className="py-6">This is a simple projects page.</p>
                   
                        { avatars.length ? (
                        <div className="grid grid-cols-3 gap-6 w-full px-4 bg-base-100 rounded-box shadow-md">
                        {avatars.map((avatar, key) => (
                            <div key={key} className="card bg-base-100 shadow-sm">
                                <figure>
                                    <img
                                    src={avatar.avatar}
                                    alt={`Avatar ${key + 1}`}
                                    className="w-full h-90 object-cover" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{avatar.fullName}</h2>
                                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                    <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Meet</button>
                                    </div>
                                </div>
                            </div>
                        
                        ))}
                        
                        </div>) : null }
                        
                   
                </div>
            </div>
        </div>
    );
}
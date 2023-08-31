

const CreateNftForm = () => {
	return (
		  <div className="pt-24 px-4 dark:bg-darkBg dark:text-darkText">
		    <h1 className="font-bold text-xl md:text-center">Create NFT💡</h1>
		    <form className="py-6 w-full relative md:px-36">
		      <div className="mb-6">
		        <p className="font-semibold mb-2 text-sm">Name</p>
		        <input type="text" placeholder="Type your item name here..." className="p-4 bg-gray-100 dark:bg-gray-900 rounded-md outline-0 text-gray-900 dark:text-gray-100 w-full" required/>
		      </div>
		      <div className="mb-6">
		        <p className="font-semibold mb-2 text-sm">Add image cover</p>
		        <input type="file" className="p-4 bg-gray-100 dark:bg-gray-900 rounded-md outline-0 text-gray-900 dark:text-gray-100 w-full" required/>
		      </div>
		      <div className="mb-6">
		        <p className="font-semibold mb-2 text-sm">Description</p>
		        <textArea placeholder="Say something about this item🚀" className="p-4 bg-gray-100 dark:bg-gray-900 rounded-md outline-0 text-gray-900 dark:text-gray-100 w-full" required/>
		      </div>
		      <div className="mb-6">
		        <p className="font-semibold mb-2 text-sm">Choose item category</p>
		        <select className="p-4 bg-gray-100 dark:bg-gray-900 rounded-md outline-0 text-gray-900 dark:text-gray-100 w-full" required>
		          <option>Art</option>
		          <option>Music</option>
		          <option>Sport</option>
		          <option>Game</option>
		        </select>
		      </div>  
		        <div className="mb-6 flex justify-between items-center">
		          <div>
		            <p className="font-semibold mb-2 text-sm">High bid</p>
		           <input type="number" placeholder="0.246" className="p-4 bg-gray-100 dark:bg-gray-900 rounded-md outline-0 text-gray-900 dark:text-gray-100 w-[150px]" required/>
		          </div>
		          <div>
		            <p className="font-semibold mb-2 text-sm">Low bid</p>
		           <input type="number" placeholder="0.123" className="p-4 bg-gray-100 dark:bg-gray-900 rounded-md outline-0 text-gray-900 dark:text-gray-100 w-[150px]" required/>
		          </div>
		        </div>
		        <button type="submit" className="p-4 rounded-md text-sm font-bold bg-subColor text-darkText w-full">Create</button>
		    </form>
		  </div>
		)
}

export default CreateNftForm
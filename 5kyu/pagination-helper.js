// Description:

// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

// The following are some examples of how this class is used:

// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); // should == 2
// helper.itemCount(); // should == 6
// helper.pageItemCount(0); // should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); // should == 1 (zero based index)
// helper.pageIndex(2); // should == 0
// helper.pageIndex(20); // should == -1
// helper.pageIndex(-10); // should == -1





class PaginationHelper {
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
	}
	itemCount() {
	// returns the number of items within the entire collection
	}
	pageCount() {
	// returns the number of pages
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
	}
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
	}
}


//Codewars
class PaginationHelper {
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
        this.collection = collection
        this.itemsPerPage = itemsPerPage
	}
	itemCount() {
	// returns the number of items within the entire collection
        return this.collection.length
	}
	pageCount() {
	// returns the number of pages
        return parseInt(this.collection.length / this.itemsPerPage) + (this.collection.length % this.itemsPerPage > 0 ? 1 : 0)
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
        return this.pageCount()<= pageIndex || pageIndex < 0 ? -1 : (this.pageCount()-1 != pageIndex ? this.itemsPerPage : (this.collection.length % this.itemsPerPage > 0 ? this.collection.length % this.itemsPerPage : this.itemsPerPage))
	}
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
        return itemIndex < 0 || itemIndex >= this.itemCount() ? -1 : parseInt(itemIndex/this.itemsPerPage)
	}
}


//Codewars
class PaginationHelper {
	constructor(collection, itemsPerPage) {
	    this.collection = collection;
        this.itemsPerPage = itemsPerPage;
	}
	itemCount() {
	    return this.collection.length;
	}
	pageCount() {
	    return parseInt(this.collection.length/this.    itemsPerPage)+(this.collection.length%this.    itemsPerPage>0?1:0);
	}
	pageItemCount(pageIndex) {
        return this.pageCount()<=pageIndex || pageIndex < 0? -1 : (this.pageCount()-1!=pageIndex ? this.itemsPerPage : (this.collection.length%this.itemsPerPage>0?this.collection.length%this.itemsPerPage:this.itemsPerPage));
	}
	pageIndex(itemIndex) {
	    return itemIndex < 0 || itemIndex >= this.itemCount() ? -1 : parseInt(itemIndex/this.itemsPerPage);
	}
}


//Codewars
class PaginationHelper {
	constructor(collection, itemsPerPage){
  	this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    this.format = function(temparray = []) {
      for (let i = 0, j = collection.length; i < j; i += itemsPerPage)
        temparray.push(this.collection.slice(i, i + itemsPerPage));
      return temparray;
    }
  }
}

PaginationHelper.prototype.itemCount = function() {
	return this.collection.length;
}

PaginationHelper.prototype.pageCount = function() {
	return this.format().length;
}

PaginationHelper.prototype.pageItemCount = function(pageIndex = 0) {
	try {
  	return this.format()[pageIndex].length 
  } catch(e) {
  	return -1;
  }
}

PaginationHelper.prototype.pageIndex = function(itemIndex) {
	if (itemIndex >= this.collection.length || itemIndex < 0) return -1;
  return ~~(itemIndex / this.itemsPerPage);
}
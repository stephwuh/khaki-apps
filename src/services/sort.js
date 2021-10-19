

const sortFunction = {

    //why isnt categoryName highlighted?

    sortApp: (jobApps, categoryName) => {

        let name = categoryName

        jobApps.sort((a,b) => {

            const categoryA = a[name].toLowerCase();
            const categoryB = b[name].toLowerCase();
      
            let comparison = 0;
            
            if (categoryA > categoryB) {
              comparison = 1;
            } else if (categoryA < categoryB) {
              comparison = -1;
            }
      
            return comparison;
      
          })
    }

};

export default sortFunction;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Models;
using Microsoft.AspNetCore.Components;
using static System.Net.Mime.MediaTypeNames;

namespace DAL
{
    public class CoronaDetailsDal:ICoronaDetailDal
    {
        Covid19Context cv=new Covid19Context();


        #region get all corona details
        public List<CoronaDetail> GetAllCoronaDetails() => cv.CoronaDetails.ToList();
        #endregion

        #region add corona details-generally
        //not necessary!!! 
        public Boolean AddCoronaDetails(CoronaDetail newCDetails)
        {//check
            if (cv.Hmomembers.ToList().FirstOrDefault(x => x.Id == newCDetails.HmomemberId) != null)
            {
                try
                {
                    cv.CoronaDetails.Add(newCDetails);
                    cv.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }

        #endregion

        #region add a vaccination
        
        //add the vaccination 
        //It doesn't matter which field of the vaccination number we fill in the data,
        //The vaccine will be filled in the field of the next empty vaccine
        public Boolean AddVaccination(string ID, CoronaDetail vaccination)
        {
           
            try
            {
                DAL.Models.CoronaDetail newVaccination = cv.CoronaDetails.FirstOrDefault(x => x.HmomemberId.Equals(ID));
                if (newVaccination != null)
                {
                    if (newVaccination.DateOfVaccines4 == null)
                    {
                        if (newVaccination.DateOfVaccines1 == null)
                        {
                            newVaccination.DateOfVaccines1 = vaccination.DateOfVaccines1;
                            newVaccination.Vmanufacturer1 = vaccination.Vmanufacturer1;
                        }
                        else if (newVaccination.DateOfVaccines2 == null)
                        {
                            newVaccination.DateOfVaccines2 =vaccination.DateOfVaccines1;
                            newVaccination.Vmanufacturer2 = vaccination.Vmanufacturer1;
                        }
                        else if (newVaccination.DateOfVaccines2 == null)
                        {
                            newVaccination.DateOfVaccines2 =vaccination.DateOfVaccines1;
                            newVaccination.Vmanufacturer2 = vaccination.Vmanufacturer1;
                        }

                        else if (newVaccination.DateOfVaccines3 == null)
                        {
                            newVaccination.DateOfVaccines3 = vaccination.DateOfVaccines1;
                            newVaccination.Vmanufacturer3 = vaccination.Vmanufacturer1;
                        }
                        else
                            newVaccination.DateOfVaccines4 = vaccination.DateOfVaccines4;
                        cv.SaveChanges();
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                else return false;
            }
            catch (Exception)
            {
                return false;
            }
        }
        #endregion

        #region single corona details
        public CoronaDetail GetCoronaDetailsById(string id) => cv.CoronaDetails.ToList().FirstOrDefault(x => x.HmomemberId.Equals(id));
        #endregion

        #region add corona
        //update
        public Boolean AddCovid19(string ID, CoronaDetail vaccination)
        {
            try
            {
                DAL.Models.CoronaDetail newVaccination = cv.CoronaDetails.FirstOrDefault(x => x.HmomemberId.Equals(ID));
                if (newVaccination.TimeOfPositiveAnswer == null)
                {
                   
                    newVaccination.TimeOfPositiveAnswer = vaccination.TimeOfPositiveAnswer;
                    //recovry date: positive + 14 days 
                    newVaccination.RecoveryDate = vaccination.TimeOfPositiveAnswer.Value.AddDays(14);
                    cv.SaveChanges();
                    return true;
                }
                //add a notification
                else return false;
            }
            catch (Exception)
            {
                return false;
            }
        }
 


    #endregion

    #region How many were not vaccinated
    public int Notvaccinated() {
        int numOfPeople = 0;
        numOfPeople=cv.CoronaDetails.Count(x=>x.DateOfVaccines1==null);
            return numOfPeople;
    }
  
    #endregion

    #region Active patients every day in the last month
    public int ActivePatients()
    {
        int numOfPeople = 0;
            numOfPeople = cv.CoronaDetails.Count(x => x.TimeOfPositiveAnswer.Value.Month == DateTime.Now.Month);
            return numOfPeople; 
    }
    #endregion
    }
}

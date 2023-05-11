using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public partial class CoronaDetail
    {
        private DateTime NewDate = DateTime.Now;
        int numberOfDaysToSubtract = 7;
        #region ID
        private string hmomemberId;
        public string HmomemberId
        {
            get { return hmomemberId; }
            set
            {
                if (ValidateId(value))
                    hmomemberId = value;
            }
        }
        #endregion
        #region id validation
        public static bool ValidateId(string ID)
        {
            if (ID.Length != 9)
            {
                return false;
            }

            List<int> IdList = new List<int>();

            try
            {
                for (int i = 0; i < ID.Length; i++)
                {
                    IdList.Add(int.Parse(ID[i].ToString()));
                }
            }
            catch
            {
                return false;
            }

            int counter = 0;
            for (int i = 0; i < 9; i++)
            {
                IdList[i] *= (i % 2) + 1;
                if (IdList[i] > 9)
                {
                    IdList[i] -= 9;
                }
                counter += IdList[i];
            }

            return counter % 10 == 0;
        }


        #endregion

        #region Vaccinetion1
        public string? Vmanufacturer1 { get; set; }

        private DateTime? dateOfVaccines1;
        public DateTime? DateOfVaccines1
        {
            //can add with the date of today 
            get { return dateOfVaccines1; }
            set
            {
                if (Vmanufacturer1 != "string")
                {
                    //if (dateOfVaccines1 >= DateTime.Today)
                    dateOfVaccines1 = DateTime.Now;
                }

            }
        }

        #endregion

        #region Vaccinetion2
        public string? Vmanufacturer2 { get; set; }
        private DateTime? dateOfVaccines2;
        //need to wait at  least 10 days between each vaccination
        public DateTime? DateOfVaccines2
        {
            get { return dateOfVaccines2; }
            set
            {
                if (Vmanufacturer2 != "string")
                {
                    if (NewDate.AddMilliseconds(-numberOfDaysToSubtract) > dateOfVaccines1)
                        dateOfVaccines2 = value;
                    else
                    {
                        throw new Exception("you need to wait at least 10 days between taking another vaccination!");
                    }

                    //if (NewDate > dateOfVaccines1)
                    //       dateOfVaccines2 = value;

                }

            }
        }

        #endregion

        #region Vaccinetion3
        public string? Vmanufacturer3 { get; set; }
        private DateTime? dateOfVaccines3;

        public DateTime? DateOfVaccines3
        {
            get { return dateOfVaccines3; }
            set
            {
                if (Vmanufacturer3 != "string")
                {
                    if (NewDate.AddMilliseconds(-numberOfDaysToSubtract) > dateOfVaccines2)
                        dateOfVaccines3 = value;
                    else
                    {
                        throw new Exception("you need to wait at least 10 days between taking another vaccination!");
                    }
                }

            }
        }
        #endregion

        #region Vaccinetion4
        public string? Vmanufacturer4 { get; set; }
        private DateTime? dateOfVaccines4;

        public DateTime? DateOfVaccines4
        {
            get { return dateOfVaccines4; }
            set
            {
                if (Vmanufacturer4 != "string")
                {
                    if (NewDate.AddMilliseconds(-numberOfDaysToSubtract) > dateOfVaccines3)
                        dateOfVaccines4 = value;
                    else
                    {
                        throw new Exception("you need to wait at least 10 days between taking another vaccination!");
                    }
                }
            }
        }
        #endregion

        #region Time of Positive & Recovery
        public DateTime? TimeOfPositiveAnswer { get; set; }
        public DateTime? RecoveryDate { get; set; }
        #endregion

    }
}


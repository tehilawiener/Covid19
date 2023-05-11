using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace DAL.Models
{
    public partial class Hmomember
    {
        #region ID
        private string id;
        public string Id
        {
            get { return id; }
            set
            {
                try
                {
                    if (ValidateId(value))
                        id = value;
                    else
                    {
                        throw new HttpException(400, "invalid id");
                    }
                }
                catch { throw new HttpException(400, "invalid id"); }

            }
        }
        #endregion
        #region valid id
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

        #region Fullname
        public string? LastName { get; set; }
        public string? FirstName { get; set; }
        #endregion

        #region Born date

        //A check that the person has already been born
        private DateTime burnDate;

        public DateTime BurnDate
        {
            get { return burnDate; }
            set
            {
                try
                {
                    if (burnDate <= DateTime.Today)
                        burnDate = value;
                }
                catch { throw new HttpException(400, "invalid burnDate"); }

            }
        }
        #endregion

        #region Adress
        public string? City { get; set; }
        public string? Street { get; set; }
        public int? HouseNumber { get; set; }
        #endregion

        #region Phone number
        private string? foneNumber;

        public string? FoneNumber
        {
            get { return foneNumber; }
            set
            {

                if (ValidatePhone(value))
                    foneNumber = value;
                else
                {
                    throw new HttpException(400, "invalid phone number");
                }
            }
        }
        #endregion
        #region phone number validation
        public bool ValidatePhone(string value)
        {
            string regexPattern = @"^(0[23489]|0[57]\d|70|72|74|76|77|78|79)\d{7}$";

            //check if the field is empty
            if (value == "string" || value == "")
                return true;
            if (!string.IsNullOrEmpty(value) && !Regex.IsMatch(value, regexPattern))
            {
                return false;
            }
            return true;
        }

        #endregion

        #region mobile phone
        private string? mobileFone;

        public string? MobileFone
        {
            get { return mobileFone; }
            set
            {

                if (ValidateobilePhone(value))
                    mobileFone = value;

                else
                {
                    throw new HttpException(400, "invalid mobile phone");
                }

            }
        }
        #endregion
        #region mobile fin validation
        public bool ValidateobilePhone(string value)
        {
            string regexPattern = @"^0(5\d|7[7-9]|77|78)\d{7}$";
            //check if the field is empty
            if (value == "string" || value == "")
                return true;

            if (!string.IsNullOrEmpty(value) && !Regex.IsMatch(value, regexPattern))
            {
                return false;
            }
            return true;

        }
        #endregion

    }
}


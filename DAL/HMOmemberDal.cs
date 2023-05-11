using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Models;
using System.Net;


namespace DAL
{
    public class HMOmemberDal:IHMOmemberDal
    {
        Covid19Context cv = new Covid19Context();
        #region get all hmo members
        public List<Hmomember> GetAllHMOmembers() => cv.Hmomembers.ToList();
        #endregion
        private CoronaDetail newClient = new CoronaDetail();
        #region add hmo member

        public Boolean AddHMOmember(Hmomember newHmomember)
        {
              //when creating new HMO member 
              //creating also a CoronaDetails with his ID
            this.newClient.HmomemberId=newHmomember.Id;

            try
            {
                cv.Hmomembers.Add(newHmomember);
                cv.CoronaDetails.Add(this.newClient);
                cv.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        #endregion
        #region get single HMOmember
        public Hmomember GetHmomemberById(string id) => cv.Hmomembers.ToList().FirstOrDefault(x => x.Id.Equals(id));
        #endregion
    }
}

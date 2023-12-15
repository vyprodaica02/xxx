using Design.Entity;
using Infrastructure.ErrorHelper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.IServices
{
    public interface  ICreateAccount
    {
        public Task<ErrorHel> CreateAcc(List<ListAcc> listAccs);

    }
}
